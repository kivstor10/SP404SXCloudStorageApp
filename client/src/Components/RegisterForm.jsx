import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission for user registration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 
    setSuccess(''); 

    const { username, email, password } = formData;

    try {
      // AWS Amplify sign up method
      const response = await Auth.signUp({
        username, // Username can be email if you prefer that as the identifier
        password,
        attributes: {
          email, // Specify email as an attribute for Cognito
        },
      });

      // If sign-up is successful
      setSuccess('Registration successful! Please check your email to confirm your account.');
    } catch (err) {
      // Handle errors (e.g., user already exists, invalid input, etc.)
      setError(err.message || 'An error occurred during registration.');
    }
  };

  return (
    <div className='login-form'>
      <Form onSubmit={handleSubmit}>
        <label>Username</label>
        <FormInput 
          type="text"
          label="username"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange} // Capture input changes
          required
        />
        <br /><br />
        
        <label>Email</label>
        <FormInput 
          type="email"
          label="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange} // Capture input changes
          required
        />
        <br /><br />
        
        <label>Password</label>
        <FormInput 
          type="password"
          label="password"
          name="password"
          placeholder="********"
          value={formData.password}
          onChange={handleChange} // Capture input changes
          required
        />
        <br /><br />

        <SubmitButton /> 
      </Form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default RegisterForm;
