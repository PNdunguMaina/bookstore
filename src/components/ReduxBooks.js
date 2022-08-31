import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function ReduxBooks() {
  const booksDisplayed = useSelector((state) => state.books);
  return (
    <>
      {booksDisplayed.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </>
  );
}

export default ReduxBooks;
