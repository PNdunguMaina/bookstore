/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book({ id, title, author }) {
  const dispatch = useDispatch();
  return (
    <div className='book-item'>
      <p className='title'>{title}:</p>
      <p className='author'>{author}</p>
      <button
        type='button'
        onClick={() => {
          dispatch(removeBook(id));
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default Book;
