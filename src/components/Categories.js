import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const category = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const showStatus = () => dispatch(checkStatus());

  return (
    <div>
      <h1>{category}</h1>
      <button type="button" onClick={showStatus}>
        Check status
      </button>
    </div>
  );
}

export default Categories;
