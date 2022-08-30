// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK ';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Reducer
export default function books(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          author: action.author,
          title: action.title,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

// Action creators
export const addBook = (book) => ({ type: ADD_BOOK, book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, id });
