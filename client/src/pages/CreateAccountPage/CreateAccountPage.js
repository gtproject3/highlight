import react from "React";
import "./CreateAccountPage.css";
import GlobalNav from "../../components/GlobalNav";
import GlobalFooter from "../../components/GlobalFooter";

const CreateAccountPage = props => {
	
	<div>

		<GlobalNav />
		<h1 className="uk-text-center whitishText">Create Account:</h1>
		<div className="uk-container">

			<form className="authorForm uk-width-1-2@m uk-align-center uk-form-stacked">
				<p className="uk-text-lead">Creating an account allows you to become a contributing member of Highlight.</p>
				<p className="uk-text-center redText"><span uk-icon="bolt"></span></p>
						 
				<fieldset className="uk-fieldset">
					<div className="form-group">
	
						<div className="uk-margin">
							<label className="uk-form-label" for="form-stacked-select">* First Name:</label>
							<div className="uk-inline uk-width-1-1">
								<span className="uk-form-icon uk-form-icon-flip blueText" uk-icon="icon: pencil"></span>
								<input className="uk-input" id="firstName" name="firstName" type="text"></input>
							</div>
						</div>
	
						<div className="uk-margin">
							<label className="uk-form-label" for="form-stacked-select">* Last Name:</label>
							<div className="uk-inline uk-width-1-1">
								<span className="uk-form-icon uk-form-icon-flip blueText" uk-icon="icon: pencil"></span>
								<input className="uk-input" id="lastName" name="lastName" type="text"></input>
							</div>
						</div>
	
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
					
						<button className="uk-button uk-button-primary redText uk-align-center" id="submit-btn"><span uk-icon="user"></span>&nbsp; Create Account</button>

					</div>
	
				</fieldset>
			</form>

		</div>
		<GlobalFooter />

	</div>
};

export default CreateAccountPage;
