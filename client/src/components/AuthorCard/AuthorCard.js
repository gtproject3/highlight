import React from "react";
import "./AuthorCard.css";

const AuthorCard = props => (
    
    <li className="uk-width-4-5">
        <div className="uk-card uk-card-default">
            <div className="uk-card-header">
                <div className="uk-width-expand">
                    <div className="uk-card-badge uk-label" id="worksCount">{props.worksCount}</div>
                    <h3 className="uk-card-title uk-margin-remove-bottom" id="authorName">{props.authorName}</h3>
                    <p className="uk-text-meta uk-margin-remove-top"><span className="flag-icon flag-icon-us"></span> New York City, New York, United States<br></br>Born: {props.bornAt}<br></br>Died: {props.diedAt}</p>
                </div>
            </div>
            <div className="uk-card-body">
                <p id="about">{props.about}</p>
            </div>
            <div className="uk-card-footer">
                <a className="uk-align-right uk-button uk-button-text" href="baldwin.html">View Author<span uk-icon="arrow-right"></span></a>
            </div>
        </div>
    </li>

);

export default AuthorCard;