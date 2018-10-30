import React from 'react';
import GlobalNav from "../../components/GlobalNav";
import GlobalFooter from "../../components/GlobalFooter";
import styles from './AuthorForm.module.scss';

const navStyle = {
  borderBottom: '1px dashed #DAC490'
};

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
        <GlobalNav style={navStyle} />

        <div className="uk-container">

        <h1 className="uk-text-center">Add Author:</h1>
        <fieldset className="uk-fieldset">
          <form className="authorForm uk-width-1-2@m uk-align-center uk-form-stacked">
            <label className="uk-form-label" for="form-stacked-select">* Author's Full Name:</label>
            <input className="uk-input" id="authorName"
              name="fullName"
              placeholder="Enter first and last name"
              value={this.state.fullName}
              onChange={e => this.change(e)}
            />

            <h6 className="uk-width-expand redText" uk-leader="fill: ∆"> </h6>
            <h5 className="uk-text-center blueText">DIVERSIFIERS</h5>

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
              select value={this.state.value} onChange={this.handleChange}>
              <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Nonbinary">Nonbinary</option>
              </select>

            </div>

            <div className="uk-margin">
              <label className="uk-form-label" for="form-stacked-select">* Sexual Orientation:</label>
              <select className="uk-select" id="sexualOrientation" name="sexualOrientation">
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

              <h6 className="uk-width-expand redText" uk-leader="fill: ∆"> </h6>
              <h5 className="uk-text-center blueText">BIO</h5>

            <label className="uk-form-label" for="bio">* Author's Bio:</label>
            <textarea className="uk-textarea" rows="5"
              name="bio"
              placeholder="Enter a short bio for this author" value={this.state.bio}
              onChange={e => this.change(e)}
            />

            <label className="uk-form-label uk-margin" for="hometown">* Hometown:</label>
            <input className="uk-input"
              name="hometown"
              placeholder="Enter where the author was born"
              value={this.state.hometown}
              onChange={e => this.change(e)}
            />

            <label className="uk-form-label uk-margin" for="hometown">* Number of Works:</label>
            <input className="uk-input"
              name="numberOfWorks"
              placeholder="Enter the number of works they've written"
              type="number"
              value={this.state.numberOfWorks}
              onChange={e => this.change(e)}
            />

            <button className={[styles['uk-button'], styles['uk-button-primary'], styles['redText'], styles['uk-align-center']].join(' ')} onClick={e => this.onSubmit(e)}><span uk-icon="check"></span>&nbsp;Add Author</button>

          </form>
        </fieldset>
        </div>

        <GlobalFooter />
      </div>
    );
  }
}


export default AuthorForm;