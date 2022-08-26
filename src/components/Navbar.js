import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <h1>Bookstore CMS</h1>
      </div>
      <nav className="nav-menu-container">
        <ul className="nav-links-container">
          <li className="nav-link">
            <Link to="/">Books</Link>
          </li>
          <li className="nav-link">
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
