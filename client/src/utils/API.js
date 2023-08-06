import { LOGIN_USER, ADD_USER, SAVE_BOOK, REMOVE_BOOK } from './mutations'; // Import the necessary mutations
import { GET_ME } from './queries'; // Import the query to get the logged-in user's info

// Update the existing functions to use GraphQL mutations and queries

export const getMe = async (client) => {
  try {
    const { data } = await client.query({ query: GET_ME });
    return data.me;
  } catch (err) {
    console.error(err);
    throw new Error('Unable to get user data.');
  }
};

export const createUser = async (client, userData) => {
  try {
    const { data } = await client.mutate({ mutation: ADD_USER, variables: userData });
    return data.addUser;
  } catch (err) {
    console.error(err);
    throw new Error('Unable to create user.');
  }
};

export const loginUser = async (client, userData) => {
  try {
    const { data } = await client.mutate({ mutation: LOGIN_USER, variables: userData });
    return data.login;
  } catch (err) {
    console.error(err);
    throw new Error('Unable to login.');
  }
};

export const saveBook = async (client, bookData) => {
  try {
    const { data } = await client.mutate({ mutation: SAVE_BOOK, variables: bookData });
    return data.saveBook;
  } catch (err) {
    console.error(err);
    throw new Error('Unable to save book.');
  }
};

export const deleteBook = async (client, bookId) => {
  try {
    const { data } = await client.mutate({ mutation: REMOVE_BOOK, variables: { bookId } });
    return data.removeBook;
  } catch (err) {
    console.error(err);
    throw new Error('Unable to delete book.');
  }
};

// Make a search to Google Books API
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
