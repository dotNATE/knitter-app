import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import { Globals } from "./globals";
const isAuth = require("./Middleware/isAuth");

const server = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      return { req: req };
    },
  });

  app.use(isAuth);

  server.applyMiddleware({ app });

  await mongoose.connect(Globals.mongoURI, { useNewUrlParser: true });

  app.listen({ port: 4200 }, () => {
    console.log("Server Running");
  });
};

server();
