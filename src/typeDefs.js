import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    user(email: String!): User!
    users: [User!]!
    stitch(id: String!): Stitch!
    stitches: [Stitch!]!
  }

  type Mutation {
    createNewUser(
      fName: String!
      lName: String!
      email: String!
      password: String!
    ): User!
    login(email: String!, password: String!): String!
    createNewStitch(content: String!, postedByUserId: String!): Stitch!
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
