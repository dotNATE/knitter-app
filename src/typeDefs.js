import { gql } from "apollo-server-express";

export const typeDefs = gql`

type Query {
    users: [User!]!
}

type Mutation {
    createNewUser( fName: String!, lName: String!, email: String!, password: String! ): User!
}

type User {
    id: ID!
    fName: String!
    lName: String!
    email: String!
    password: String!
}

`;