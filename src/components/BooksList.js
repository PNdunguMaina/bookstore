import React from 'react';

// import Book from './Book';
import InputBook from './InputBook';
import ReduxBooks from './ReduxBooks';

function BooksList() {
  return (
    <div>
      <ReduxBooks />
      <InputBook />
    </div>
  );
}

export default BooksList;
