import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './Home.css';
import GlobalNav from '../../components/GlobalNav';
import GlobalFooter from '../../components/GlobalFooter';
import Hero from '../../components/Hero';
import SearchPanel from '../../components/SearchPanel';

function Home() {
  return (
    <div>
      <GlobalNav />
      <Hero />
      <SearchPanel />
      <GlobalFooter />
    </div>
  )
}

export default Home;