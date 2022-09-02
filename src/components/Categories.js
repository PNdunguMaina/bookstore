import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const category = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const showStatus = () => dispatch(checkStatus());

  const categoryStyles = {
    minHeight: '79vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translateY(-25%)',
  };

  const categoryBtnStyles = {
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
  };
  return (
    <div style={categoryStyles}>
      <h1>{category}</h1>
      <button type="button" onClick={showStatus} style={categoryBtnStyles}>
        Check status
      </button>
    </div>
  );
}

export default Categories;
