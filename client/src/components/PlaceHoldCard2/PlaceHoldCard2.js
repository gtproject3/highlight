import React from "react";
import "../AuthorCard/AuthorCard.css";

const PlaceHoldCard2 = props => (

    <div>
        <div className="uk-card uk-card-default uk-margin">
            <div className="uk-card-header">
                <div className="uk-width-expand">
                    <div className="uk-card-badge uk-label">13 works</div>
                    <h3 className="uk-card-title uk-margin-remove-bottom">Yukio Mishima</h3>
                    <p className="uk-text-meta uk-margin-remove-top"><span className="flag-icon flag-icon-jp"></span> Yotsuya, Tokyo, Japan<br/>Born: January 14, 1925<br/>Died: November 25, 1970</p>
                </div>
            </div>
            <div className="uk-card-body">
                <p>Yukio Mishima is the pen name of Kimitake Hiraoka, a Japanese author, poet, playwright, actor, model, film director, founder of the Tatenokai, and nationalist. Mishima is considered one of the most important Japanese authors of the 20th century.</p>
            </div>
            <div className="uk-card-footer">
                <a className="uk-align-right uk-button uk-button-text" href="baldwin.html">View Author<span uk-icon="arrow-right"></span></a>
            </div>
        </div>
    </div>

);

export default PlaceHoldCard2;