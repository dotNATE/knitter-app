import express from "express";
import mongoose from "mongoose";
import { ApolloServer, gql } from "apollo-server-express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import { Globals } from "./globals";

const server = async () => {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    server.applyMiddleware({app});

    try {
        await mongoose.connect(Globals.mongoURI, {useNewUrlParser: true});
    } catch (error) {
        console.error(error);
    }

    app.listen({port: 4200}, () => {
        console.log('Server Running');
    })
}

server();