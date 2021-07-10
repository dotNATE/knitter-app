import express from "express";
import mongoose from "mongoose";
import { ApolloServer, gql } from "apollo-server-express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const server = async () => {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    server.applyMiddleware({app});

    try {
        await mongoose.connect("mongodb+srv://admin:6K9e9JcxhPMsuLrez3@knitter.u4roj.mongodb.net/main_data?retryWrites=true&w=majority", {useNewUrlParser: true});
    } catch (error) {
        console.error(error);
    }

    app.listen({port: 4200}, () => {
        console.log('Server Running');
    })
}

server();