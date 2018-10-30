import axios from "axios";
 import React from "react";
 import './LoginPage.css';
 import InputBox from "../../components/InputBox";
 import GlobalNav from '../../components/GlobalNav';
 import GlobalFooter from '../../components/GlobalFooter';
 
const LoginPage = props => {

	<div>
		<GlobalNav />
		<h1 className="uk-text-center blueText">login</h1>
		<div className="uk-container">
			<form className="authorForm uk-width-1-2@m uk-align-center uk-form-stacked">
                
				<p className="uk-text-lead">Login and add some Highlights of your own.</p>
				<p className="uk-text-center redText"><span uk-icon="bolt"></span></p>
						 
				<fieldset className="uk-fieldset">
					<div className="form-group">
	
						<div className="uk-margin">
							<label className="uk-form-label" for="form-stacked-select">* Email:</label>
							<div className="uk-inline uk-width-1-1">
								<span className="uk-form-icon uk-form-icon-flip blueText" uk-icon="icon: world"></span>
								<input className="uk-input" id="email" name="email" type="text"></input>
							</div>
						</div>
	
						<div className="uk-margin">
							<label className="uk-form-label" for="form-stacked-select">* Password:</label>
							<div className="uk-inline uk-width-1-1">
								<span className="uk-form-icon uk-form-icon-flip blueText" uk-icon="icon: lock"></span>
								<input className="uk-input" id="password" name="password" type="text"></input>
							</div>
						</div>           
					
					<button className="uk-button uk-button-secondary redText uk-align-center" id="submit-btn"><span uk-icon="user"></span>&nbsp; login</button>

					</div>
	
				</fieldset>
			
			</form>
		</div>
		<GlobalFooter />
	</div>

};

export default LoginPage;