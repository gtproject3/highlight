import React from "react";
import "./AuthorDetailNav.css";

// :TODO: props needs to be passed in somewhere, along with proper routes
//Header for author detail view 
const AuthorDetailNav = props => (
    <nav id="galaxyTop" className="uk-navbar-container uk-navbar-transparent" uk-navbar>
        <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
                <li><a href="index.html"><span uk-icon="bolt"></span>&nbsp;highlight</a></li>
                <li><a href="authorForm.html"><span uk-icon="plus"></span>&nbsp;add author</a></li>
            </ul>
        </div>
        <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
                <li><button id="loginButton" className="uk-button uk-button-secondary">login</button></li>
            </ul>
        </div>
    </nav>

    //body for author detail view 
    <div class="uk-container uk-container-small">
        <article class="blueText uk-article">
            <h1 class="uk-article-title uk-text-center">{props.authorname}</h1>

            <p class="uk-text-center blueText uk-article-meta"><span class="flag-icon flag-icon-us"></span>
                New York City, New York, United States<br />
                Born: August 02, 1924<br />
                Died: December 01, 1987</p>

            <p class="uk-text-center redText"><span uk-icon="bolt"></span></p>



            <p class="uk-text-center"><span class="redText" uk-icon="bolt"></span></p>


        </article>
    </div>
                
export default AuthorDetailNav;