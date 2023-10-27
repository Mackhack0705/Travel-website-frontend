import React, { useState } from 'react'
import '../pages-style/signup.css'
import axios from "axios";
import { BASE_URL } from '../services/helper';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleImageInputChange = (e) => {
  //   const { name, value } = e.target;
  //   // Split the input value by line breaks to create an array of image urls
  //   setFormData({ ...formData, [name]: value.split("\n") });
  // };

  const handleSubmit = async (e) => { 
    e.preventDefault(); // refresh nhi hone deta
    console.log(formData);

    try {
      // Send a post reques to your Express api to add a new user
      await axios.post("${BASE_URL}/users/register", formData);

      // Clear the Form fields after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

      alert("User registered successfully");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Error registering user. Please try again later.");
    }
  }
  return (
    <div className='signup-form'>
      <div className="form-section">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          name='firstName'
          // value={formData.firstName}
          placeholder='First Name' 
          onChange={handleChange}
          />
          <input
           type="text"
           name='lastName'
          //  value={formData.lastName}
           placeholder='Last Name' 
            onChange={handleChange}
           />
          <input type="email"
          className='account' 
          name='email'
          // value={formData.email}
          placeholder='Email'
          onChange={handleChange}
           />
          <br />
          <input 
          type="password" 
          className='account' 
          name='password'
          // value={formData.password}
          placeholder='Password' 
            onChange={handleChange}
          />
          <br />
          <input 
          type="password" 
          className='account' 
          name='confirmPassword'
          // value={formData.confirmPassword}
          placeholder='Confirm password' 
            onChange={handleChange}
          />
          <button className='submit-button primary-button'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
