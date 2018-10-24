import React from 'react';
import './GlobalNav.css';

const GlobalNav = props => (

	<nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
        <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
                <li><a href="/"><span uk-icon="bolt"></span>&nbsp;highlight</a></li>
				<li><a href="/AuthorForm"><span uk-icon="plus"></span>&nbsp;add author</a></li>
            </ul>
        </div>
        <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
                <li><button id="loginButton" className="uk-button uk-button-secondary">login</button></li>
            </ul>
        </div>
    </nav>

);

export default GlobalNav;