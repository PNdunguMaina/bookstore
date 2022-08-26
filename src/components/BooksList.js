import React from 'react';

// import Book from './Book';
import InputBook from './InputBook';

function BooksList(props) {
  return (
    <>
      <ul className="all-books">{/* all books are displayed here */}</ul>
      <InputBook />
    </>
  );
}

export default BooksList;
