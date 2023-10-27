import React, { useState } from 'react'
import '../pages-style/login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../services/helper';

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(formData);

      const response = await axios.post(`${BASE_URL}/users/login`, formData);
      // Handle the response from the server, e.g., save the token and redirect the user
      const token = response.data.token;

      // You can save the token in local storage or a state management solution.
      // For example, you can use localStorage:
      localStorage.setItem("token", token);

      setIsLoggedIn(true);
      navigate('/home');
      // Redirect the user to a protected route or do other actions as needed.

    } catch (error) {
      // Handle login errors, e.g., show an error message to the user.
      console.error(error);
    }
  }
  return (
    <div className='login-form'>
      <div className="form-section">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name='email'
            className='account'
            onChange={handleChange}
            placeholder='Email' />
          <br />
          <input
            type="password"
            name='password'
            className='account'
            onChange={handleChange}
            placeholder='Password' />
          <button className='submit-button primary-button'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
