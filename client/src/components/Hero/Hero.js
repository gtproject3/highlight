import React from 'react';
import AuthorCard from '../AuthorCard';

const Hero = props => (

    <div className="uk-container blueBody">
        <div className="uk-inline">
            <img src="https://stmed.net/sites/default/files/galaxy-wallpapers-30826-3558648.jpg" alt=""></img>
            <div className="uk-overlay uk-position-center">
                <h1 className="uk-text-center">highlighting underrepresented authors</h1>
                <div className="uk-position-relative uk-visible-toggle" uk-slider="true">
                    
                    <ul className="uk-slider-items uk-grid">
                        
                        <AuthorCard />
                        <AuthorCard />

                    </ul>
                    
                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slider-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slider-item="next"></a>

                    <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                    
                </div>

                <p className="uk-text-center goldText">scroll to begin</p>
                <p className="uk-text-center goldText"><span uk-icon="icon: arrow-down; ratio: 2.5"></span></p>
            </div>
        </div>
    </div>

);

export default Hero;