import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

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
      dispatch(addBook({ id, title, author }));
      e.target.reset();
    }
  };
  return (
    <form className='input-book-form'>
      <input
        type='text'
        className='input-title'
        placeholder='Title'
        name='title'
        onChange={newTitle}
      />
      <input
        type='text'
        className='input-author'
        placeholder='Author'
        name='author'
        onChange={newAuthor}
      />
      <button type='submit' className='submit-book' onClick={addNewBook}>
        Submit
      </button>
    </form>
  );
}

export default InputBook;
