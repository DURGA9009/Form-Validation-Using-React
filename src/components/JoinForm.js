import React, { Component } from 'react';

import FormField from './FormField';
import EmailField from './EmailField';
import PasswordField from './PasswordField';

class JoinForm extends Component {

 
  state = { fullname: false, email: false, password: false }


  fieldStateChanged = field => state => this.setState({ [field]: state.errors.length === 0 });

  
  emailChanged = this.fieldStateChanged('email');
  fullnameChanged = this.fieldStateChanged('fullname');
  passwordChanged = this.fieldStateChanged('password');

  render() {
    const { fullname, email, password } = this.state;
    const formValidated = fullname && email && password;

   
    const validateFullname = value => {
      const regex = /^[a-z]{2,}(\s[a-z]{2,})+$/i;
      if (!regex.test(value)) throw new Error('Fullname is invalid');
    };

    return (
      <div className="form-container d-table-cell position-relative align-middle">
        <form className = "good" action="/" method="POST" noValidate>
         
          <div className="d-flex flex-row justify-content-between align-items-center px-3 mb-5">
            
            <legend className="form-label mb-0"><center>DYNAMIC FORM</center></legend>
            
            { formValidated && <button type="button" className="btn btn-primary text-uppercase px-3 py-2">SUBMIT</button> }
         </div>
          <div className="py-5">
            <div className="grey">
            
            
            <FormField type="text" fieldId="fullname" label="Enter your username" placeholder="your username" validator={validateFullname} onStateChanged={this.fullnameChanged} required /><br></br>

            <EmailField fieldId="email" label="Enter your email" placeholder="your email" onStateChanged={this.emailChanged} required /><br></br>
            
            <PasswordField fieldId="password" label="Enter your password
            " placeholder="Enter Password" onStateChanged={this.passwordChanged} thresholdLength={7} minStrength={3} required />
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default JoinForm;