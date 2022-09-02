import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookApi } from '../redux/books/books';

function InputBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const newTitle = (e) => setTitle(e.target.value);
  const newAuthor = (e) => setAuthor(e.target.value);

  const addNewBook = (e) => {
    e.preventDefault();
    const id = uuidv4();
    if (title.trim() && author.trim()) {
      dispatch(addBookApi({ id, title, author }));
      e.target.reset();
    }
  };
  return (
    <form className="input-book-form">
      <h1
        className="title"
        style={{
          width: '100%',
          height: '1.5rem',
          margin: '1.813rem 32.75rem 1.188rem 6.75rem',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '1.25rem',
          fontStretch: 'normal',
          fontStyle: 'normal',
          lineHeight: 'normal',
          letterSpacing: '-0.18px',
          color: '#888',
        }}
      >
        ADD NEW BOOK
      </h1>
      <div
        className="form-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          alignItems: 'center',
          gap: '2.125rem',
          marginLeft: '6.75rem',
          paddingBottom: '16.563rem',
        }}
      >
        <input
          type="text"
          className="input-title"
          placeholder="Title"
          name="title"
          id="title"
          onChange={newTitle}
          style={{
            height: '2.813rem',
            borderRadius: '4px',
            fontFamily: 'Montserrat, sans-serif',
            border: 'solid 1px #e8e8e8',
            backgroundColor: '#fff',
            color: '#c4c4c4',
            fontWeight: 'normal',
            letterSpacing: '-0.15px',
            fontSize: '1rem',
            paddingLeft: '1rem',
            outline: 'none',
          }}
        />

        <input
          type="text"
          className="input-author"
          placeholder="Author"
          name="author"
          id="author"
          onChange={newAuthor}
          style={{
            height: '2.813rem',
            borderRadius: '4px',
            border: 'solid 1px #e8e8e8',
            backgroundColor: '#fff',
            color: '#c4c4c4',
            letterSpacing: '-0.15px',
            fontSize: '1rem',
            paddingLeft: '1rem',
            outline: 'none',
          }}
        />

        <button
          type="submit"
          className="submit-book"
          onClick={addNewBook}
          style={{
            width: '11.5rem',
            height: '2.813rem',
            borderRadius: '3px',
            backgroundColor: '#0290ff',
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              width: '8.938rem',
              height: '1.125rem',
              fontFamily: 'RobotoSlab, sans-serif',
              fontWeight: 'bold',
              letterSpacing: '0.5px',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            Submit
          </span>
        </button>
      </div>
    </form>
  );
}

export default InputBook;
