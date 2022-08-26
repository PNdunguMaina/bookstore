import React from 'react';

function InputBook() {
  return (
    <form className="input-book-form">
      <input
        type="text"
        className="input-title"
        placeholder="Title"
        name="title"
      />
      <input
        type="text"
        className="input-author"
        placeholder="Author"
        name="author"
      />
      <button type="submit" className="submit-book">
        Submit
      </button>
    </form>
  );
}

export default InputBook;
