import React, { useState } from 'react';
import axios from 'axios';

function Register({ onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('Register button clicked');
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      const response = await axios.post('https://tictacticalbackend.up.railway.app/api/register', { email, password });
      const data = response.data;
      console.log('Response data:', data);
      if (response.status === 201) {
        localStorage.setItem('authToken', data.token); // Store the token
        localStorage.setItem('userEmail', email); // Store the email
        console.log('Token stored in localStorage:', data.token);
        onRegister(data.token, email); // Update the state in the parent component
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error during register:', error);
      alert(error.response ? error.response.data.error : 'An error occurred during register.');
    }
  };

  return (
    <form onSubmit={handleRegister} className="auth-form">
      <h2>Register</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
