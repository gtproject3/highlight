import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import GlobalNav from './components/GlobalNav';
import Hero from './components/Hero';
import SearchPanel from './components/SearchPanel';
import AuthorForm from './pages/AuthorForm/AuthorForm';
import HomeNav from './components/HomeNav/HomeNav';
import Home from './pages/Home/Home';

console.log("this is a pain");

class App extends Component {

    render() {
        return (

            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/AuthorForm" component={AuthorForm} />
                    {/*<Route path="/details" component={AuthorsDetail}/>*/}
                    <Route path="login" component={HomeNav} />
                    <Route exact path="/" component={Home} />

                </Switch>
            </Router>

        );
    };
};

export default App;