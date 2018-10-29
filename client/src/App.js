import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// should be importing pages here, not components
import GlobalNav from './components/GlobalNav';
import Hero from './components/Hero';
import SearchPanel from './components/SearchPanel';
import AuthorForm from './pages/AuthorForm/AuthorForm';
import HomeNav from './components/HomeNav/HomeNav';
import Home from './pages/Home/Home';
import CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import LoginPage from './pages/LoginPage/LoginPage';

class App extends Component {

    render() {
        return (

            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/AuthorForm" component={AuthorForm} />
                    <Route path="/CreateAccountPage" component={CreateAccountPage} />
                    {/*<Route path="/details" component={AuthorsDetail}/>*/}
                    <Route path="/LoginPage" component={LoginPage} />

                </Switch>
            </Router>

        );
    };
};

export default App;