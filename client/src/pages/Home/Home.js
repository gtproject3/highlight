import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeNav from '../../components/HomeNav';
import GlobalNav from '../../components/GlobalNav';
import Hero from '../../components/Hero';
import SearchPanel from '../../components/SearchPanel';



function Home() {
  return (
    <div>
      <GlobalNav />
      <Hero />
      <SearchPanel />
    </div>
  )
}



export default Home;