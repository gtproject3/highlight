import React from 'react';
import styles from './AuthorForm.module.scss';

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
      <form>
        <input
          name="fullName"
          placeholder= "Author Name"
         value={this.state.fullName} 
         onChange={e => this.change(e)} 
        />

        <br />

        <textarea 
        name="bio"
        placeholder="Author's Bio" value={this.state.bio} 
        onChange={e => this.change(e)} 
        />

        <br />

       <input 
       name="hometown"
       placeholder="Hometown"
       value={this.state.hometown} 
       onChange={e => this.change(e)} 
        />
        
        <br />

       <input 
       name="numberOfWorks"
       options="number"
       value={this.state.numberOfWorks} 
       onChange={e => this.change(e)} 
        />

        <br />

         <select 
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

       <br />

         <select 
       name="gender"
       label="Select one of the following:"
       select value={this.state.value} onChange={this.handleChange}>
         <option value="Female">Female</option>
         <option value="Male">Male</option>
         <option value="Nonbinary">Nonbinary</option>
       </select>

      <br />

  <select 
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

       <br />

  <select 
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

        <br />
       <button className={[styles['uk-button'], styles['uk-button-primary']].join(' ')} onClick={e => this.onSubmit(e)}>Add Author</button>
      </form>


    );
  }
}



export default AuthorForm;