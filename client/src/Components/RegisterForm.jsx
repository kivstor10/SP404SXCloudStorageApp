import React from 'react';
import { Form, Link } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';





const RegisterForm = () => {
  return (
    <div className='login-form'>
      <Form method='POST'>
        <br />
        <label>Username</label>
        <br />
        <FormInput 
          type="text"
          label="username"
          name="username"
          placeholder="username"
        />
        <br /><br />
        <label>Email</label>
        <br />
        <FormInput 
          type="email"
          label="email"
          name="email"
          placeholder="email"
        />
        <br /><br />
        <label>Password</label>
        <FormInput 
          type="password"
          label="password"
          name="password"
          placeholder="********"
        />
        <br /><br />
        <SubmitButton /> 
      </Form>
      <br />
    </div>
  );
};

export default RegisterForm;
