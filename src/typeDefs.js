import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    userByEmail(email: String!): User!
    usersAll: [User!]!
    stitchById(id: ID!): Stitch!
    stitchesAll: [Stitch!]!
  }

  type Mutation {
    createNewUser(
      fName: String!
      lName: String!
      email: String!
      password: String!
    ): User!
    login(email: String!, password: String!): AuthData!
    createNewStitch(content: String!): Stitch!
  }

  type User {
    _id: ID!
    fName: String!
    lName: String!
    email: String!
    password: String!
    stitches: [Stitch!]
  }

  type Stitch {
    _id: ID!
    content: String!
    postedByUserId: User!
  }

  type AuthData {
    userId: ID!
    token: String!
  }
`;
