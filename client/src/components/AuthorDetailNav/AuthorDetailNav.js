import React from "react";
import "./AuthorDetailNav.css";

// :TODO: props needs to be passed in somewhere, along with proper routes
//Header for author detail view 

export class AuthorDetailNav extends React.Component {
    return() {
        return (
            <div>
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
            </div>
        )
    }
}

export default AuthorDetailNav;