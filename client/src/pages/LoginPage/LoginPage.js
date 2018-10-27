import react from 'React';
import './LoginPage.css';
import GlobalNav from '../../components/GlobalNav';
import GlobalFooter from '../../components/GlobalFooter';

// import axios from 'axios';
// import React from 'react';
// import InputBox from '../../components/InputBox';
// import { Redirect, withRouter } from 'react-router-dom';

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


// class CreateAcc extends React.Component {
//     state = {
//         email: '',
//         password: '',
//         messageFromServer: '',
//         showError: false,
//         registerError: false,
//         loginError: false
//     };

//     handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

//     handleClick = (e) => {
//         e.preventDefault();
//         console.log(this.state);
//         if (this.state.username === '' || this.state.email === '' || this.state.password === '') {
//             this.setState({
//                 showError: true,
//                 loginError: false,
//                 registerError: true
//             });
//         } else {
//             console.log(this.state);
//             axios
//                 .post('/auth/register', {
//                     email: this.state.email,
//                     password: this.state.password,
//                     username: this.state.username
//                 })
//                 .then((response) => {
//                     localStorage.setItem('token', response.data.token)
//                     this.props.history.push('/');
//                     location.reload; // eslint-disable-line
//                 })
//                 .catch((err) => console.log(err.response.data));
//         }
//     };

//     render() {
//         const { messageFromServer, showError, loginError, registerError } = this.state;
//         if (messageFromServer === '') {
//             return (
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-sm-12">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <span className="card-title">
//                                         <h3>Create Account</h3>
//                                     </span>

//                                     <form className="container">
//                                         <InputBox
//                                             type="text"
//                                             name="username"
//                                             label="Username"
//                                             value={this.state.username}
//                                             onChange={this.handleChange}
//                                         />
//                                         <InputBox
//                                             type="email"
//                                             name="email"
//                                             label="Email"
//                                             value={this.state.email}
//                                             onChange={this.handleChange}
//                                         />
//                                         <InputBox
//                                             type="password"
//                                             name="password"
//                                             label="Password"
//                                             value={this.state.password}
//                                             onChange={this.handleChange}
//                                         />
//                                         <button type="submit" className="btn btn-primary" onClick={this.handleClick}>
//                                             Submit
//                                         </button>
//                                     </form>
//                                 </div>
//                             </div>
//                             {showError === true &&
//                                 registerError === true && (
//                                     <div>
//                                         <p>Username and password are required fields.</p>
//                                     </div>
//                                 )}
//                             {showError === true &&
//                                 loginError === true && (
//                                     <div>
//                                         <p>That Email is already taken. Please choose another or login.</p>
//                                     </div>
//                                 )}
//                         </div>
//                     </div>
//                 </div>
//             );
//         } else {
//             return <Redirect to={`/`} />;
//         }
//     }
// }

// export default withRouter(CreateAcc);