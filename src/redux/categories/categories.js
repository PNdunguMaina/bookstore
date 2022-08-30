// Actions
const CHECK_STATUS = 'CHECK_STATUS';

// reducer
export default function categories(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        ...state,
        status: 'Under construction',
      };
    default:
      return state;
  }
}

// Action creators
export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}
