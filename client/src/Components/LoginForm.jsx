import React from 'react';
import { Form, Link } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';

const LoginForm = () => {
  return (
    <div className='login-form'>
      <Form method='POST'>
        <br />
        <label>email</label>
        <br />
        <FormInput 
          type="text"
          label="email"
          name="identifier"
          placeholder="email"
        />
        <br /><br />
        <label>Password</label>
        <br />
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
      <p>
        Don't have an account? <Link to="/register"><br />Register here</Link>
      </p>
    </div>
  );
};

export default LoginForm;
