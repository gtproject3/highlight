import React from "react";
import {Link} from 'react-router-dom';
import "./HomeNav.css";

// :TODO: props needs to be passed in somewhere, along with proper routes

const LoginLink = (props) => <button id="loginButton" className="uk-button uk-button-secondary" {...props} />

const HomeNav = props => (
    <div>
          <nav className="uk-navbar-container uk-navbar-transparent noBorder blueBody" uk-navbar="true">
        <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
   
                <li><Link to="/"><span uk-icon="bolt"></span>&nbsp;highlight</Link></li>
               
                <li><Link to="/addauthor"><span uk-icon="plus"></span>&nbsp;add author</Link></li>
            </ul>
        </div>
        <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
                <li><Link to="/login" component={LoginLink}><button id="loginButton" className="uk-button uk-button-secondary">Login</button></Link></li>
            </ul>
        </div>
    </nav>
  
       
    </div>
  
);

export default HomeNav;