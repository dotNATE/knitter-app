import { ObjectID } from "mongodb";
import { Stitch } from "./Models/Stitch";
import { User } from "./Models/User";

export const resolvers = {
  Query: {
    user: (_, { id }) => User.findOne(ObjectID(id)),
    users: () => User.find(),
    stitch: (_, { id }) => Stitch.findOne(ObjectID(id)),
    stitches: () => Stitch.find(),
  },
  Mutation: {
    createNewUser: async (_, { fName, lName, email, password }) => {
      const user = new User({ fName, lName, email, password });
      await user.save();
      return user;
    },
    createNewStitch: async (_, { content, postedByUserId }) => {
      const stitch = new Stitch({ content, postedByUserId });
      await stitch.save();
      return stitch;
    },
  },
};
