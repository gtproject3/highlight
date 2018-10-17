import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeNav from './components/HomeNav';
import AuthorCard from './components/AuthorCard';
import SearchPanel from './components/SearchPanel';

class App extends Component {
    render() {
        return (
            <div>
                <HomeNav />
            </div>
        );
    };
};

export default App;