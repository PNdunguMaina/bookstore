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
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
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
      <div className="left-div">
        <ul style={{ listStyle: 'none' }}>
          <li
            className="category"
            style={{
              margin: '0 2.438rem 0 0',
              opacity: '0.5',
              fontFamily: 'Montserrat, san-serif',
              fontSize: '0.875',
              fontWeight: 'bold',
              color: '#121212',
            }}
          >
            Drama{' '}
          </li>
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
          <button
            type="button"
            onClick={() => deleteBook(id)}
            style={btnStyles}
          >
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
      <div
        className="center-div"
        style={{
          display: 'flex',
          alignItems: 'center',
          borderRight: '2px solid #e8e8e8',
        }}
      >
        <div
          className="oval"
          style={{
            width: '100px',
            height: '100px',
            border: '6px solid dodgerblue',
            borderLeft: '6px solid #f5f6fa',
            borderRadius: '50%',
          }}
        ></div>
        <div
          className="status"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <span
            className="percentage"
            style={{
              color: '#121212',
              margin: '0.063rem 5.75rem 0 0.688rem',
              fontFamily: 'Montserrat, san-serif',
              fontSize: '2rem',
            }}
          >
            64%
          </span>
          <span
            style={{
              color: '#121212',
              margin: '0.438rem 4.938rem 0.75rem 0.75rem ',
              fontFamily: 'Montserrat, san-serif',
              fontSize: '0.875rem',
              opacity: '0.5',
            }}
          >
            Completed
          </span>
        </div>
      </div>
      <div
        className="right-div"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <span
          className="chapter-heading"
          style={{
            margin: '0.063rem 3.625rem 0 3.688rem',
            opacity: '0.5',
            fontFamily: 'RobotoSlab',
            fontSize: '0.813rem',
            fontWeight: '300',
            color: '#121212',
            textTransform: 'uppercase',
          }}
        >
          Current Chapter
        </span>
        <span
          className="heading-name"
          style={{
            margin: '0.438rem 6.813rem 0.25rem 3.688rem',
            fontFamily: 'RobotoSlab',
            fontSize: '1rem',
            fontWeight: '300',
            color: '#121212',
            letterSpacing: '-0.4px',
          }}
        >
          Chapter 17
        </span>
        <button
          type="button"
          style={{
            width: '11.5rem',
            height: '2.063rem',
            padding: '0.438rem 1.188rem 0.rem 1.375rem',
            borderRadius: '3px',
            backgroundColor: '#0290ff',
            outline: 'none',
            border: 'none',
            color: '#fff',
            fontFamily: 'RobotoSlab, sans-serif',
            fontWeight: '300',
            fontSize: '0.813rem',
            letterSpacing: '0.5px',
            cursor: 'pointer',
            margin: '0.438rem 6.813rem 0.25rem 3.688rem',
          }}
        >
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
}

export default Book;
