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
input BookInput {
  authors: [String]
  description: String! 
  bookId: String! 
  image: String! 
  title: String! 
}
type Query {
   users: [User]
   me: User
}
type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    deleteBook(bookData: BookInput!): User
}

`;

module.exports = typeDefs;