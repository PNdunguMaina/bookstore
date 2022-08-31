import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const category = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{category}</h1>
      <button type="button" onClick={() => dispatch(checkStatus())}>
        Check status
      </button>
    </div>
  );
}

export default Categories;
