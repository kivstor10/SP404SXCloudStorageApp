import React from 'react';
import RegisterForm from '../Components/RegisterForm';
import axios from 'axios';
import { REGISTERURL } from '../pages/data';
import { redirect } from 'react-router-dom';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // const { username, email } = data.user;

  try {
    console.log(data);  
    console.log(data.username);
    const response = await axios.post(REGISTERURL, data, {
      
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    
    await axios.post(`${import.meta.env.VITE_APP_BACKEND_API}/api/add-user`, {
      username: data.username,
      email: data.email,
    });
    

    console.log(response.data);
    return redirect("/login");
  } catch (error) {
    console.log(error)
    const errorMessage =
      error?.response?.data?.error?.message || "Please double check your credentials";
    console.log(errorMessage);
    return null;
  }
  
};


const RegisterPage = () => {
  return (
    <div className='welcome-page-container'>
      <div>
        <h1>Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;