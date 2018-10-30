import axios from "axios";
import React from "react";
import { Redirect, withRouter } from 'react-router-dom';
import "./CreateAccountPage.css";
import InputBox from "../../components/InputBox";
import GlobalNav from "../../components/GlobalNav";
import GlobalFooter from "../../components/GlobalFooter";


class CreateAccountPage extends React.Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		messageFromServer: '',
		showError: false,
		registerError: false,
		loginError: false
	};

	handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

	handleClick = (e) => {
		e.preventDefault();
		console.log(this.state);
		if (this.state.email === '' || this.state.password === '') {
			this.setState({
				showError: true,
				loginError: false,
				registerError: true
			});
		} else {
			console.log(this.state);
			axios
				.post('/auth/register', {
					email: this.state.email,
					password: this.state.password
				})
				.then((response) => {
					localStorage.setItem('token', response.data.token)
					this.props.history.push('/');
					location.reload; // eslint-disable-line
				})
				.catch((err) => console.log(err.response.data));
		}
	};


	render() {
		const { messageFromServer, showError, loginError, registerError } = this.state;
		if (messageFromServer === '') {
			return (
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
									<InputBox
										type="text"
										name="firstName"
										label="firstName"
										value={this.state.firstName}
										onChange={this.handleChange}
									/>
								</div>
							</div>

							<div className="uk-margin">
								<label className="uk-form-label" for="form-stacked-select">* Last Name:</label>
								<div className="uk-inline uk-width-1-1">
									<span className="uk-form-icon uk-form-icon-flip blueText" uk-icon="icon: pencil"></span>
									<InputBox
										type="text"
										name="lastName"
										label="lastName"
										value={this.state.lastName}
										onChange={this.handleChange}
									/>
								</div>
							</div>

							<div className="uk-margin">
								<label className="uk-form-label" for="form-stacked-select">* Email:</label>
								<div className="uk-inline uk-width-1-1">
									<span className="uk-form-icon uk-form-icon-flip blueText" uk-icon="icon: world"></span>
									<InputBox
										type="email"
										name="email"
										label="Email"
										value={this.state.email}
										onChange={this.handleChange}
									/>
								</div>
							</div>

							<div className="uk-margin">
								<label className="uk-form-label" for="form-stacked-select">* Password:</label>
								<div className="uk-inline uk-width-1-1">
									<span className="uk-form-icon uk-form-icon-flip blueText" uk-icon="icon: lock"></span>
									<InputBox
										type="password"
										name="password"
										label="Password"
										value={this.state.password}
										onChange={this.handleChange}
									/>
								</div>
							</div>

							<button className="uk-button uk-button-primary redText uk-align-center" id="submit-btn" onClick={this.handleClick}><span uk-icon="user"></span>&nbsp; Create Account</button>

						</div>

					</fieldset>
				</form>
				{showError === true && registerError === true && (
					<div>
						<p>Username and password are required fields.</p>
					</div>
				)}
				{showError === true &&
					loginError === true && (
						<div>
							<p>That Email is already taken. Please choose another or login.</p>
						</div>
					)}
			</div>
			<GlobalFooter />
		</div>
			);
	} else {
	return <Redirect to={`/`} />;
	}
}};


export default withRouter(CreateAccountPage);


