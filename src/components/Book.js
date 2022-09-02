/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../redux/books/books';

function Book({ id, title, author }) {
  const dispatch = useDispatch();
  const deleteBook = (id) => dispatch(removeBookApi(id));

  const bookItemStyles = {
    border: '1px solid #e8e8e8',
    height: '10.625rem',
    margin: '0.938rem 0 0.938rem 6.75rem',
    padding: '2rem 9.188rem 1.625rem 1.688rem',
    borderRadius: '4px',
    backgroundColor: 'white',
  };

  const btnStyles = {
    height: '1.188rem',
    fontFamily: 'RobotoSlab, sans-serif',
    fontSize: '0.875rem',
    fontWeight: '300',
    color: '#4386bf',
    border: 'none',
    outline: 'none',
    background: 'none',
    cursor: 'pointer',
    opacity: '0.8',
  };
  return (
    <div className="book-item" style={bookItemStyles}>
      <ul style={{ listStyle: 'none' }}>
        <li
          className="title"
          style={{
            height: '1.813rem',
            width: '12.313rem',
            margin: '0.188rem 20.188rem 0 0',
            fontFamily: 'RobotoSlab, sans-serif',
            fontSize: '1.375rem',
            fontWeight: 'bold',
            letterSpacing: '-0.2px',
            color: '#121212',
          }}
        >
          {title}
        </li>
        <li
          className="title"
          style={{
            height: '1.188rem',
            margin: '0.25rem 0 0',
            fontFamily: 'RobotoSlab, sans-serif',
            fontSize: '0.875rem',
            fontWeight: '300',
            letterSpacing: '-0.2px',
            color: '#4386bf',
          }}
        >
          {author}
        </li>
      </ul>
      <div
        className="buttons"
        style={{
          margin: '0.188rem 0.938rem 0.125rem 1.75rem',
        }}
      >
        <button type="button" style={btnStyles}>
          Comments{' '}
          <span
            style={{
              margin: '0.75rem 1.063rem 0 0.938rem',
            }}
          >
            |
          </span>
        </button>
        <button type="button" onClick={() => deleteBook(id)} style={btnStyles}>
          Remove{' '}
          <span
            style={{
              margin: '0.75rem 1.063rem 0 0.938rem',
            }}
          >
            |
          </span>
        </button>
        <button type="button" style={btnStyles}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default Book;
