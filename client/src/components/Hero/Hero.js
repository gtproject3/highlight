import React from 'react';
import './Hero.css';

const Hero = props => (

    <div className="uk-container">
        <div className="uk-inline">
          <img src="https://stmed.net/sites/default/files/galaxy-wallpapers-30826-3558648.jpg" alt />
          <div className="uk-overlay uk-position-center">
            <h1 className="uk-text-center">highlight underrepresented authors</h1>
            <div className="uk-position-relative uk-visible-toggle" uk-slider>
              <ul className="uk-slider-items uk-grid">
                <li className="uk-width-4-5">
                  <div className="uk-card uk-card-default">
                    <div className="uk-card-header">
                      <div className="uk-width-expand">
                        <div className="uk-card-badge uk-label">8 works</div>
                        <h3 className="uk-card-title uk-margin-remove-bottom">James Baldwin</h3>
                        <p className="uk-text-meta uk-margin-remove-top"><span className="flag-icon flag-icon-us" /> New York City, New York, United States<br />Born: August 02, 1924<br />Died: December 01, 1987</p>
                      </div>
                    </div>
                    <div className="uk-card-body">
                      <p>James Arthur "Jimmy" Baldwin was an American novelist and social critic. His essays, as collected in Notes of a Native Son, explore intricacies of racial, sexual, and class distinctions in Western societies, most notably in mid-20th-century America.</p>
                    </div>
                    <div className="uk-card-footer">
                      <a className="uk-align-right" href="baldwin.html">View Author<span uk-icon="arrow-right" /></a>
                    </div>
                  </div>
                </li>
                <li className="uk-width-4-5">
                  <div>
                    <div className="uk-card uk-card-default">
                      <div className="uk-card-header">
                        <div className="uk-width-expand">
                          <div className="uk-card-badge uk-label">2 works</div>
                          <h3 className="uk-card-title uk-margin-remove-bottom">Ghalib Shiraz Dhalla</h3>
                          <p className="uk-text-meta uk-margin-remove-top"><span className="flag-icon flag-icon-ke" /> Mombasa, Kenya<br />Born: June 05, 1978</p>
                        </div>
                      </div>
                      <div className="uk-card-body">
                        <p>Ghalib Shiraz Dhalla is an American writer. He is most famous for his novel Ode to Lata published in 2002, that was adapted to a film in 2008 under the title The Ode. He has also published the novel The Two Krishnas in 2011, which was released as The Exiles in India.</p>
                      </div>
                      <div className="uk-card-footer">
                        <a className="uk-align-right" href="#">View Author<span uk-icon="arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="uk-width-4-5">
                  <div>
                    <div className="uk-card uk-card-default">
                      <div className="uk-card-header">
                        <div className="uk-width-expand">
                          <div className="uk-card-badge uk-label">12 works</div>
                          <h3 className="uk-card-title uk-margin-remove-bottom">Malinda Lo</h3>
                          <p className="uk-text-meta uk-margin-remove-top"><span className="flag-icon flag-icon-cn" /> China<br />Born: 1974</p>
                        </div>
                      </div>
                      <div className="uk-card-body">
                        <p>Malinda Lo is an American writer of young adult novels including Ash, Huntress, Adaptation, and Inheritance. She also does research on diversity in young adult literature publishing.</p>
                      </div>
                      <div className="uk-card-footer">
                        <a className="uk-align-right" href="#">View Author<span uk-icon="arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="uk-width-4-5">
                  <div>
                    <div className="uk-card uk-card-default">
                      <div className="uk-card-header">
                        <div className="uk-width-expand">
                          <div className="uk-card-badge uk-label">13 works</div>
                          <h3 className="uk-card-title uk-margin-remove-bottom">Yukio Mishima</h3>
                          <p className="uk-text-meta uk-margin-remove-top"><span className="flag-icon flag-icon-jp" /> Yotsuya, Tokyo, Japan<br />Born: January 14, 1925<br />Died: November 25, 1970</p>
                        </div>
                      </div>
                      <div className="uk-card-body">
                        <p>Yukio Mishima is the pen name of Kimitake Hiraoka, a Japanese author, poet, playwright, actor, model, film director, founder of the Tatenokai, and nationalist. Mishima is considered one of the most important Japanese authors of the 20th century.</p>
                      </div>
                      <div className="uk-card-footer">
                        <a className="uk-align-right" href="#">View Author<span uk-icon="arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous" />
              <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next" />
              <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" />
            </div>
            <p className="uk-text-center goldText">scroll to begin</p>
            <p className="uk-text-center goldText"><span uk-icon="icon: arrow-down; ratio: 2.5" /></p>
          </div>
        </div>
      </div>

);

export default Hero;