import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';


import BookstoreContainer from './components/BookstoreContainer';
import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BookstoreContainer />
    </Provider>
  </React.StrictMode>,
);
