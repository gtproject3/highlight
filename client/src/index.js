// React-related Imports //

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import App from './App';
import GlobalNav from './components/GlobalNav';

// - - - - - - - - - - - - - - - - - - //

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={GlobalNav}/>
       {/* <Route path="/login" component={HomeNav} />
       <Route path="/addauthor" component={AuthorForm} /> }
        {/* <Route path="/search" component={SearchPage}/>*/}

      </Switch>
  </Router>,


  document.getElementById('root')
);
