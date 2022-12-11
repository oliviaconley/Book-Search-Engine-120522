import { gql } from '@apollo/client';

// route to get logged in user's info (needs the token)
export const GET_ME = gql`
  mutation getMe()
`;


export const CREATE_USER = gql`
  mutation createUser()
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    profile {
      _id
      name
    }
  }
}
`;

// save book data for a logged in user
export const SAVE_BOOK = gql`
  mutation saveBook() {
  }
`;

// remove saved book data for a logged in user
export const DELETE_BOOK = gql`
  mutation deleteBook($book: String!) {
    deleteBook(book: $book) {
      _id
      name
      books
    }
  }
`;

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
