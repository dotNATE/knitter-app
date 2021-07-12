import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Globals } from "./globals";
import { Stitch } from "./Models/Stitch";
import { User } from "./Models/User";

const getSingleUserById = (userID) => {
  return User.findById(userID)
    .then((user) => {
      return {
        ...user._doc,
        _id: user.id,
        stitches: getManyStitchesById.bind(this, user._doc.stitches),
      };
    })
    .catch((err) => {
      throw err;
    });
};

const getManyStitchesById = (stitchIDs) => {
  return Stitch.find({ _id: { $in: stitchIDs } })
    .then((stitches) => {
      return stitches.map((stitch) => {
        return {
          ...stitch._doc,
          _id: stitch.id,
          postedByUserId: getSingleUserById.bind(this, stitch.postedByUserId),
        };
      });
    })
    .catch((err) => {
      throw err;
    });
};

export const resolvers = {
  Query: {
    userByEmail: async (_, { email }) =>
      await User.findOne({ email: email }).populate("stitches"),
    usersAll: () => User.find().populate("stitches"),
    stitchById: (_, { id }) => Stitch.findById(id).populate("postedByUserId"),
    stitchesAll: (_, __, { req }) =>
      Stitch.find().then((stitches) => {
        return stitches.map((stitch) => {
          return {
            ...stitch._doc,
            _id: stitch.id,
            postedByUserId: getSingleUserById.bind(
              this,
              stitch._doc.postedByUserId
            ),
          };
        });
      }),
  },
  Mutation: {
    createNewUser: async (_, { fName, lName, email, password }) => {
      const checkNewEmail = await User.findOne({ email: email });
      if (checkNewEmail) {
        throw new Error("Account already exists for that email");
      }
      return bcrypt
        .hash(password, Globals.saltRounds)
        .then((hash) => {
          const user = new User({ fName, lName, email, password: hash });
          return user.save();
        })
        .then((result) => {
          return { ...result._doc };
        });
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email: email });
      if (!user) {
        throw new Error("No user with that email");
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error("Invalid password");
      }
      const token = jsonwebtoken.sign(
        {
          id: user.id,
          email: user.email,
        },
        Globals.JWT_SECRET
      );
      return { userId: user.id, token: token };
    },
    createNewStitch: async (_, { content }, { req }) => {
      if (!req.isAuth) {
        throw new Error("Unauthorised");
      }
      const postedByUserId = req.userId;
      const stitch = new Stitch({ content, postedByUserId });
      let createdStitch;
      return stitch
        .save()
        .then((result) => {
          createdStitch = {
            ...result._doc,
            id: result._doc.id,
            postedByUserId: getSingleUserById.bind(
              this,
              result._doc.postedByUserId
            ),
          };
          return User.findById(postedByUserId);
        })
        .then((user) => {
          if (!user) {
            throw new Error("User does not exist");
          }
          user.stitches.push(stitch);
          user.save();
          return user;
        })
        .then((result) => {
          return createdStitch;
        });
    },
  },
};
