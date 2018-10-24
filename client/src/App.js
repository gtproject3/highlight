import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomeNav from './components/HomeNav';
import Hero from './components/Hero';
import SearchPanel from './components/SearchPanel';

class App extends Component {
    render() {
        return (
            <div>
                <HomeNav />
                <Hero />
                <SearchPanel />
            </div>
        );
    };
};

export default App;