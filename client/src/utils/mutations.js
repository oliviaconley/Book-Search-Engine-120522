import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      password
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
      username
    }
  }
}
`;

export const LOGIN_USER = gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;

// save book data for a logged in user
export const SAVE_BOOK = gql`
mutation Mutation($bookData: BookInput!) {
  saveBook(bookData: $bookData) {
    _id
    email
    password
    savedBooks {
      authors
      description
      bookId
      image
      link
      title
    }
    username
  }
}
`;

// remove saved book data for a logged in user
export const DELETE_BOOK = gql`
mutation Mutation($bookData: BookInput!) {
  deleteBook(bookData: $bookData) {
    _id
    username
    email
    password
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
