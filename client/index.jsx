import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, NavLink } from 'react-router-dom'
import Person from './containers/Person'
import People from './containers/People'
import Home from './containers/Home';
import AppRouter from './router/Router';
import {store} from './redux/store';
import {Provider} from 'react-redux';
const App = () => {
  return (
     <AppRouter/>
  );
};

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.querySelector('.react-container'));
