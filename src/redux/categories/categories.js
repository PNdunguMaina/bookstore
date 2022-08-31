// Actions
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// reducer
export default function categories(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

// Action creator
export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}
