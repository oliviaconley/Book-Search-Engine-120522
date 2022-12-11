const { gql } = require('apollo-server-express');

//setting up the type of info youre getting from graphql 
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }
type Book {
    authors: String
    description: String
    bookId: ID
    image: String
    link: String
    title: String
}
type Auth {
    token: ID!
    user: User
  }
type Query {
    user(username: String!): User
}
typer Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
}

`;

module.exports = typeDefs;