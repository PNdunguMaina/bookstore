import React from 'react';
import { Link } from 'react-router-dom';
                

function Navbar() {
  const navbarStyles = {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    height: '5.938rem',
    margin: '0 0 2.375rem',
    padding: '1.438rem 6.188rem 1.688rem 6.25rem',
    backgroundColor: '#fff',
    borderBottom: 'solid 1px #e8e8e8',
  };

  const navLinksStyle = {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
  };
  return (
    <div className="navbar-container" style={navbarStyles}>
      <div className="logo-container">
        <span
          style={{
            display: 'flex',
            alignItems: 'baseline',
            width: '15rem',
            height: '2.313rem',
            margin: '0.375rem 2.938rem 0.125rem 0',
            fontSize: '1.875rem',

            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#0290ff',
          }}
        >
          Bookstore CMS
        </span>
      </div>
      <nav className="nav-menu-container">
        <ul className="nav-links-container" style={navLinksStyle}>
          <li className="nav-link">
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                margin: '1.125rem 2.563rem 0.688rem 0',
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '1.9px',
                color: '#121212',
                fontSize: '0.813rem',
              }}
            >
              Books
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="/categories"
              style={{
                textDecoration: 'none',
                margin: '1.125rem 41.5rem 0.688rem 2.563rem',
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '1.9px',
                color: '#121212',
                fontSize: '0.813rem',
                opacity: '0.5',
              }}
            >
              Categories
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className="user-icon"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          borderRadius: '2em',
          border: '1px solid #e8e8e8',
          height: '2.813rem',
          width: '2.813rem',
          background: 'none',
          cursor: 'pointer',
        }}
      >
        <span
          style={{
            content: ' ',
            height: '0.6rem',
            width: '0.6rem',
            background: '#0290ff',
            borderRadius: '2rem',
          }}
        ></span>
        <span
          style={{
            content: ' ',
            height: '0.6rem',
            width: '0.6rem',
            background: '#0290ff',
            borderRadius: '2em 2em 0 0',
          }}
        ></span>
      </div>
    </div>
  );
}

export default Navbar;
