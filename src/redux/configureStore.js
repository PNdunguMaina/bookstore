import {
  configureStore,
  combineReducers,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import books from './books/books';
import categories from './categories/categories';
import { apiUrl } from './books/books';

const reducer = combineReducers({ books, categories });

const store = configureStore({ reducer });

export const obtainBooks = createAsyncThunk('books/obtainBooks', async () => {
  const response = fetch(apiUrl);
  return response.data;
});

export default store;
