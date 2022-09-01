/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../redux/books/books';

function Book({ id, title, author }) {
  const dispatch = useDispatch();
  const deleteBook = (id) => dispatch(removeBookApi(id));
  return (
    <div className="book-item">
      <ul>
        <li className="title">
          {title}: <span className="title">{author}</span>
        </li>
      </ul>
      <button type="button" onClick={() => deleteBook(id)}>
        Remove
      </button>
    </div>
  );
}

export default Book;
