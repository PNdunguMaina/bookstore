import { v4 as uuidv4 } from 'uuid';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK ';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// initialize state
const initialState = [
  { id: uuidv4(), author: 'Mark Twain', title: 'Adventures of Tom Sawyer' },
  { id: uuidv4(), author: 'Kazi Nasrul Islam', title: 'Agni Veena' },
  { id: uuidv4(), author: 'Lewis Carrol', title: 'Alice in Wonderland' },
  { id: uuidv4(), author: 'Coleridge', title: 'Ancient Mariner' },
];

// Reducer
export default function books(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
}

// Action creators
export const addBook = (book) => ({ type: ADD_BOOK, book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, id });
