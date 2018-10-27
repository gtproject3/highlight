// React-related Imports //

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import App from './App';
import HomeNav from './components/HomeNav/HomeNav';
import GlobalNav from './components/GlobalNav';
import AuthorForm from './pages/AuthorForm/AuthorForm';
/*import AuthorsDetail from './pages/AuthorsDetail';*/


// - - - - - - - - - - - - - - - - - - //

const hist = createBrowserHistory();

ReactDOM.render(
 <App/>,


  document.getElementById('root')

  );