import express from "express";
import mongoose from "mongoose";
import { ApolloServer, gql } from "apollo-server-express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import { Globals } from "./globals";
import { routes } from "./Config/routes";

const server = async () => {
    const app = express();
    
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    server.applyMiddleware({app});

    await mongoose.connect(Globals.mongoURI, {useNewUrlParser: true}); 

    routes(app);

    app.listen({port: 4200}, () => {
        console.log('Server Running');
    })
}

server();