import React from 'react';
import GlobalNav from "../../components/GlobalNav";
import GlobalFooter from "../../components/GlobalFooter";
import styles from './AuthorForm.module.scss';

//import styles from './AuthorForm.css';

import "./AuthorForm.css";

// - - - - - - - - 

class AuthorForm extends React.Component {


  state = {
    fullName: "",
    race: "",
    gender: "",
    sexualOrientation: "",
    disability: "",
    bio: "",
    hometown: "",
    numberOfWorks: "",
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <GlobalNav />

        <h1 class="uk-text-center">Add Author:</h1>
        <fieldset className="uk-fieldset">
          <form className="authorForm uk-width-1-2@m uk-align-center uk-form-stacked">
            <label className="uk-form-label" for="form-stacked-select">* Author's Full Name:</label>
            <input className="uk-input" id="authorName"
              name="fullName"
              placeholder="First Name / Last Name"
              value={this.state.fullName}
              onChange={e => this.change(e)}
            />

            <h6 className="uk-width-expand goldText" uk-leader="fill: ∆"> </h6>
            <p className="formTeeth uk-text-center blueText">DIVERSIFIERS</p>

            <div className="uk-margin">
              <label className="uk-form-label" for="form-stacked-select">* Race:</label>

              <select className="uk-select" id="race" name="race">
                name="race"
                label="Select one of the following:"
       select value={this.state.value} onChange={this.handleChange}>
         <option value="Asian">Asian</option>
                <option value="Black">Black</option>
                <option value="Hispanic">Hispanic</option>
                <option value="Multiracial">Multiracial</option>
                <option value="Native American">Native American</option>
                <option value="Pacific Islander">Pacific Islander</option>
                <option value="White">White</option>
              </select>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label" for="form-stacked-select">* Gender</label>

              <select className="uk-select" id="gender" name="gender">
                name="gender"
                label="Select one of the following:"
              select value={this.state.value} onChange={this.handleChange}>
              <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Nonbinary">Nonbinary</option>
              </select>

            </div>

            <div className="uk-margin">
              <label className="uk-form-label" for="form-stacked-select">* Sexual Orientation:</label>

              <select className="uk-select" id="sexualOrientation" name="sexualOrientation">
                name="sexualOrientation"
                label="Select one of the following:"
              select value={this.state.value} onChange={this.handleChange}>
              <option value="Lesbian">Lesbian</option>
                <option value="Gay">Gay</option>
                <option value="Bisexual">Bisexual</option>
                <option value="Transgender">Transgender</option>
                <option value="Queer">Queer</option>
                <option value="Asexual">Asexual</option>
              </select>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label" for="form-stacked-select">Disability (Optional):</label>

              <select className="uk-select" id="disability" name="disability">
                name="disability"
                select value={this.state.value} onChange={this.handleChange}>
                <option value="None">None</option>
                <option value="Acquired Brain Injury">Acquired Brain Injury</option>
                <option value="Autism Spectrum Disorder">Autism Spectrum Disorder</option>
                <option value="Deaf or Hard of Hearing">Deaf or Hard of Hearing</option>
                <option value="Intellectual Disability">Intellectual Disability</option>
                <option value="Mental Health Conditions">Mental Health Conditions</option>
                <option value="Physical Disability">Physical Disability</option>
                <option value="Vision Impairment">Vision Impairment</option>
              </select>
            </div>

            <h6 class="uk-width-expand goldText" uk-leader="fill: ∆"> </h6>
            <p class="formTeeth uk-text-center blueText">BIO</p>

            <div className="uk-margin">
              <label class="uk-form-label" for="form-stacked-select">* Date of Birth:</label>
            </div>
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon uk-form-icon-flip whitishText" uk-icon="icon: calendar"></span>
              <input className="uk-input flatpickr flatpickr-input active" id="Born_at" name="Born_at" type="text" />
            </div><br />

            <div className="uk-margin">
              <label class="uk-form-label" for="form-stacked-select">* Date of Death (Optional):</label>
            </div>
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon uk-form-icon-flip whitishText" uk-icon="icon: calendar"></span>
              <input className="uk-input flatpickr flatpickr-input active" id="Died_at" name="Died_at" type="text" />
            </div>

            <div className="uk-margin" />
            <label className="uk-form-label" for="form-stacked-select">Hometown:</label>

            <input className="uk-input" id="hometown" name="hometown" type="text"
              name="hometown"
              placeholder="Hometown"
              value={this.state.hometown}
              onChange={e => this.change(e)}
            />

            <br />
            <div className="uk-margin" />
            <label className="uk-form-label" for="form-stacked-select">* Short Bio:</label>
            <textarea className="uk-textarea" rows="5" id="about" name="about"
              name="bio"
              placeholder="Author's Bio" value={this.state.bio}
              onChange={e => this.change(e)}
            />

            <br />


            <div className="uk-margin" />
            <label className="uk-form-label" for="form-stacked-select">* Number of Works:</label>
            <input className="uk-input" id="works_count" name="works_count" type="number"
              name="numberOfWorks"
              placeholder="Number of Works"
              type="number"
              value={this.state.numberOfWorks}
              onChange={e => this.change(e)}
            />

            <br />

            <button className="uk-button uk-button-text uk-align-center redText" id="submit-btn" onClick={e => this.onSubmit(e)}><span uk-icon="check"></span>&nbsp;Add Author</button>
          </form>
        </fieldset>

        <GlobalFooter />
      </div>
    );
  }
}


export default AuthorForm;