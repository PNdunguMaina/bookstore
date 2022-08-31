/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book({ id, title, author }) {
  const dispatch = useDispatch();
  const deleteBook = () => dispatch(removeBook(id));
  return (
    <div className="book-item">
      <p className="title">{title}:</p>
      <p className="author">{author}</p>
      <button type="button" onClick={deleteBook}>
        Remove
      </button>
    </div>
  );
}

export default Book;
