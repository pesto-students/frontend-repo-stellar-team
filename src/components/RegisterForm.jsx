import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    title: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/register', formData);
      console.log('Registration successful:', response.data);
      // Optionally handle success (e.g., show success message, redirect)
    } catch (error) {
      console.error('Registration error:', error.response.data.message);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
        placeholder='Enter name'
      />
      <input
        type='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        placeholder='Enter email'
      />
      <input
        type='password'
        name='password'
        value={formData.password}
        onChange={handleChange}
        placeholder='Enter password'
      />
      <input
        type='text'
        name='role'
        value={formData.role}
        onChange={handleChange}
        placeholder='Enter role'
      />
      <input
        type='text'
        name='title'
        value={formData.title}
        onChange={handleChange}
        placeholder='Enter title'
      />
      <button type='submit'>Register</button>
    </form>
  );
};

export default RegisterForm;
