import { gql } from "apollo-server-express";

export const typeDefs = gql`

type Query {
    helloWorld: String!
    dogs: [Dog!]!
}

type Mutation {
    createDog(name: String!): Dog!
}

type Dog {
    id: ID!
    name: String!
}

`;