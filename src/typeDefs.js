import { gql } from "apollo-server-express";

export const typeDefs = gql`

type Query {
    user(id: String!): User!
    users: [User!]!
    stitches: [Stitch!]!
}

type Mutation {
    createNewUser( fName: String!, lName: String!, email: String!, password: String! ): User!
    createNewStitch( content: String!, postedByUserId: String! ): Stitch!
}

type User {
    id: ID!
    fName: String!
    lName: String!
    email: String!
    password: String!
    stitches: [Stitch!]!
}

type Stitch {
    id: ID!
    content: String!
    postedByUserId: String!
}

`;