import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// We will need to import this from redux to create our store and make use of the thunk
import { createStore, applyMiddleware, compose } from 'redux';
// Dont forget to import redux thunk
import thunk from 'redux-thunk';
// Getting our combined reducers
import reducers from './reducers/reducers';
// And our Person component
import Person from './containers/Person'

// Define our store
const store = createStore(
    reducers,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

// This will be the entry point of our app
const App = () => {
  return (
    // We will add our components here
    <div>
      <Person />
    </div>
  );
};

ReactDOM.render(
  // We need to wrap our app in provider to make use of redux
  // Passing our store to the provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.react-container'));
