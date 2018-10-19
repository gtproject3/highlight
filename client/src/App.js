import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomeNav from './components/HomeNav';
import Hero from './components/Hero';
import SearchPanel from './components/SearchPanel';

class App extends Component {
    render() {
        return (
            // <BrowserRouter>
                <div>

                <HomeNav />
                <Hero />
                <SearchPanel />
                </div>
            // </BrowserRouter>
            
        );
    };
};

export default App;