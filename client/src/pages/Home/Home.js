import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Home.css';
import GlobalNav from '../../components/GlobalNav';
import GlobalFooter from '../../components/GlobalFooter';
import Hero from '../../components/Hero';
import SearchPanel from '../../components/SearchPanel';

const blueBody = {
  backgroundColor: '#04031c'
};
const noTopMargin = {
  marginTop: '0'
};

function Home() {
  return (
    <div>
      <div style={blueBody}>
        <GlobalNav />
      </div>
      <Hero />
      
        <SearchPanel />

      <div>
        <GlobalFooter style={noTopMargin} />
      </div>
    </div>
  )
}

export default Home;