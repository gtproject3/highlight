import React from 'react';
import './GlobalNav.css';

const GlobalNav = props => (

    <div>
        <nav classNameName="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
            <div classNameName="uk-navbar-left">
                <ul classNameName="uk-navbar-nav">
                    <li><a href="/"><span uk-icon="bolt"></span>&nbsp;highlight</a></li>
                    <li><a href="/AuthorForm"><span uk-icon="plus"></span>&nbsp;add author</a></li>
                </ul>
            </div>
            <div classNameName="uk-navbar-right">
                <ul classNameName="uk-navbar-nav">
                    <li><a id="accountButton" href="createAccount.html"><span uk-icon="user"></span>&nbsp;create account</a></li>
                    <li><a href="login.html"><button id="loginButton" className="uk-button uk-button-primary">login</button></a></li>
                </ul>
            </div>
        </nav>
    </div>

);

export default GlobalNav;