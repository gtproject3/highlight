import React from 'react';
import GlobalNav from "../../components/GlobalNav";
import GlobalFooter from "../../components/GlobalFooter";
import styles from './AuthorForm.module.scss';

const galaxyBody = {
  content: '',
  position: 'fixed',
  left: '0',
  right: '0',
  zIndex: '-1',

  backgroundColor: '#04031c',
  display: 'block',
  backgroundImage: 'url(https://stmed.net/sites/default/files/galaxy-wallpapers-30826-3558648.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'right',
  width: '100%',
  height: '100%',
  overflow: 'auto'
}
const navBorder = {
  borderBottom: '1px dashed #DAC490',
  marginBottom: '40px'
};
const btnStyle = {
  paddingRight: '30px',
  paddingLeft: '30px',
  paddingTop: '7px',
  paddingBottom: '7px',
  marginTop: '30px',
};
const center = {
  textAlign: 'center'
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
      <div style={galaxyBody}>
        <div style={navBorder}>
          <GlobalNav />
        </div>

        <div className="uk-container">

        <h1 className="uk-text-center">Add Author:</h1>
        <fieldset className="uk-fieldset">
          <form className="authorForm uk-width-1-2@m uk-align-center uk-form-stacked">
            <label className="uk-form-label" htmlFor="form-stacked-select">* Author's Full Name:</label>
            <input className="uk-input" id="authorName"
              name="fullName"
              placeholder="Enter first and last name"
              value={this.state.fullName}
              onChange={e => this.change(e)}
            />

            <h6 className="uk-width-expand redText" uk-leader="fill: ∆"> </h6>
            <h5 className="uk-text-center blueText">DIVERSIFIERS</h5>

            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="form-stacked-select">* Race:</label>
              <select value={this.state.value} onChange={this.handleChange} className="uk-select" id="race" name="race">
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
              <label className="uk-form-label" htmlFor="form-stacked-select">* Gender</label>
              <select value={this.state.value} onChange={this.handleChange} className="uk-select" id="gender" name="gender">
              <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Nonbinary">Nonbinary</option>
              </select>

            </div>

            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="form-stacked-select">* Sexual Orientation:</label>
              <select value={this.state.value} onChange={this.handleChange} className="uk-select" id="sexualOrientation" name="sexualOrientation">
              <option value="Lesbian">Lesbian</option>
                <option value="Gay">Gay</option>
                <option value="Bisexual">Bisexual</option>
                <option value="Transgender">Transgender</option>
                <option value="Queer">Queer</option>
                <option value="Asexual">Asexual</option>
              </select>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="form-stacked-select">Disability (Optional):</label>
              <select value={this.state.value} onChange={this.handleChange} className="uk-select" id="disability" name="disability">
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

            <label className="uk-form-label" htmlFor="bio">* Author's Bio:</label>
            <textarea className="uk-textarea" rows="5"
              name="bio"
              placeholder="Enter a short bio for this author" value={this.state.bio}
              onChange={e => this.change(e)}
            />

            <label className="uk-form-label uk-margin" htmlFor="hometown">* Hometown:</label>
            <input className="uk-input"
              name="hometown"
              placeholder="Enter where the author was born"
              value={this.state.hometown}
              onChange={e => this.change(e)}
            />

            <label className="uk-form-label uk-margin" htmlFor="hometown">* Number of Works:</label>
            <input className="uk-input"
              name="numberOfWorks"
              placeholder="Enter the number of works they've written"
              type="number"
              value={this.state.numberOfWorks}
              onChange={e => this.change(e)}
            />

          <div style={center}>
            <button style={btnStyle} className={[styles['uk-button'], styles['uk-button-primary'], styles['redText']].join(' ')} onClick={e => this.onSubmit(e)}><span uk-icon="plus"></span>&nbsp; Add Author</button>
          </div>

          </form>
        </fieldset>
        </div>

        <GlobalFooter />
      </div>
    );
  }
}


export default AuthorForm;