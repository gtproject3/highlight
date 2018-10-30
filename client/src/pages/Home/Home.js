import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalNav from '../../components/GlobalNav';
import GlobalFooter from '../../components/GlobalFooter';
import Hero from '../../components/Hero';
import SearchPanel from '../../components/SearchPanel';

const blueBody = {
  backgroundColor: '#04031c'
};

function Home() {
  return (
    <div style={blueBody}>
        <GlobalNav />
        <Hero />
        <SearchPanel />
        <h6 className="uk-width-expand lighterBlueText" uk-leader="fill: ∆"> </h6>
        <GlobalFooter />
    </div>
  )
}

export default Home;