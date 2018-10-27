import React from 'react';
import './AuthorForm.css';
import AuthorFormNav from '../AuthorFormNav';

export class AuthorForm extends React.Component {
  return() {
    return (
      <div>
        <AuthorFormNav />
        <h1 class="uk-text-center">Add Author:</h1>

        <form className="authorForm uk-width-1-2@m uk-align-center uk-form-stacked">
          <fieldset className="uk-fieldset">
            <div className="form-group">
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="form-stacked-select">* Full Name:</label>
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon uk-form-icon-flip whitishText" uk-icon="icon: pencil" />
                  <input className="uk-input" id="authorName" name="authorName" type="text" />
                </div>
              </div>
              <h6 className="uk-width-expand goldText" uk-leader="fill: ∆"> </h6>
              <p className="formTeeth uk-text-center blueText">DIVERSIFIERS</p>
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="form-stacked-select">* Race:</label>
                <select className="uk-select" id="gender" name="gender">
                  <option>Select race...</option>
                  <option>Asian</option>
                  <option>Black</option>
                  <option>Hispanic</option>
                  <option>Multiracial</option>
                  <option>Native American</option>
                  Pacific Islander
                  <option>White</option>
                </select>
              </div>
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="form-stacked-select">* Gender:</label>
                <select className="uk-select" id="gender" name="gender">
                  <option>Select gender...</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Nonbinary</option>
                </select>
              </div>
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="form-stacked-select">* Sexual Orientation:</label>
                <select className="uk-select" id="sexualOrientation" name="sexualOrientation">
                  <option>Select sexual orientation...</option>
                  <option>Lesbian</option>
                  <option>Gay</option>
                  <option>Bisexual</option>
                  <option>Transgender</option>
                  <option>Queer</option>
                  <option>Inersex</option>
                  <option>Asexual</option>
                  <option>Heterosexual</option>
                </select>
              </div>
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="form-stacked-select">Disability (Optional):</label>
                <select className="uk-select" id="disability" name="disability">
                  <option>Select disability...</option>
                  <option>None</option>
                  <option>Acquired Brain Injury</option>
                  <option>Autism Spectrum Disorder</option>
                  <option>Deaf or Hard of Hearing</option>
                  <option>Intellectual Disability</option>
                  <option>Mental Health Conditions</option>
                  <option>Physical Disability</option>
                  <option>Vision Impairment</option>
                </select>
              </div>
              <h6 className="uk-width-expand goldText" uk-leader="fill: ∆"> </h6>
              <p className="formTeeth uk-text-center blueText">BIO</p>
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="form-stacked-select">* Date of Birth:</label>
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon uk-form-icon-flip whitishText" uk-icon="icon: calendar" />
                  <input className="uk-input flatpickr flatpickr-input active" id="Born_at" name="Born_at" type="text" />
                </div>
              </div>
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="form-stacked-select">Date of Death (Optional):</label>
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon uk-form-icon-flip whitishText" uk-icon="icon: calendar" />
                  <input className="uk-input flatpickr flatpickr-input active" id="Died_at" name="Died_at" type="text" />
                </div>
              </div>
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="form-stacked-select">* Hometown:</label>
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon uk-form-icon-flip whitishText" uk-icon="icon: location" />
                  <input className="uk-input" id="hometown" name="hometown" type="text" />
                </div>
              </div>
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="form-stacked-select">* Short Bio:</label>
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon uk-form-icon-flip whitishText" uk-icon="heart" />
                  <textarea className="uk-textarea" rows={5} id="about" name="about" defaultValue={""} />
                </div>
              </div>
              <div className="uk-margin">
                <label className="uk-form-label" htmlFor="form-stacked-select">* Number of Works:</label>
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon uk-form-icon-flip whitishText" uk-icon="hashtag" />
                  <input className="uk-input" id="works_count" name="works_count" type="number" />
                </div>
              </div>
              <button className="uk-button uk-button-text uk-align-center redText" id="submit-btn"><span uk-icon="check" />&nbsp; Add Author</button>
            </div></fieldset>
        </form>
      </div>
    )
  }
}
export default AuthorForm;