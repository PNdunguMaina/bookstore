import axios from 'axios';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK ';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookstore/books/FETCH_BOOK';
export const apiUrl =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NZN3g7viTLMoaPSWKfVf/books/';

// initialize state
const initialState = [];

// Reducer
export default function books(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    case FETCH_BOOK:
      return action.payload;

    default:
      return state;
  }
}

// Action creators
export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });
export const fetchBook = (books) => ({ type: FETCH_BOOK, payload: books });

export const fetchBookApi = () => async (dispatch) => {
  const books = await axios.get(apiUrl);
  const fetchedBooks = Object.entries(books.data).map((book) => {
    const { title, author } = book[1][0];
    return { id: book[0], title, author };
  });
  dispatch(fetchBook(fetchedBooks));
};

export const addBookApi = (book) => async (dispatch) => {
  const { id, title, author } = book;
  const addedBook = {
    item_id: id,
    title,
    author,
    category: 'drama',
  };
  await axios.post(apiUrl, addedBook);
  dispatch(addBook(book));
};

export const removeBookApi = (id) => async (dispatch) => {
  await fetch(`${apiUrl}${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(removeBook(id));
};
