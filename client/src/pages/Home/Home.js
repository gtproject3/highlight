import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeNav from '../../components/HomeNav';



function Home (){
  return(
    <div>
      <HomeNav/>
      <div>
        <h1>This is where our content will go....</h1>
      </div>
    </div>
  )
} 



export default Home;