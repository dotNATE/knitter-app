import { User } from "./Models/User";

export const resolvers = {
    Query: {
        users: () => User.find()
    },
    Mutation: {
        createNewUser: async(_, { fName, lName, email, password }) => {
            const user = new User({ fName, lName, email, password });
            await user.save();
            return user;
        }
    }
};