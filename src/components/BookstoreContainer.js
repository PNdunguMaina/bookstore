import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import BooksList from './BooksList';
import Categories from './Categories';

function BookstoreContainer() {
  return (
    <div className="bookstore-container" style={{ backgroundColor: '#fafafa' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default BookstoreContainer;
