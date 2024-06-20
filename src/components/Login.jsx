import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login button clicked');
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      const response = await axios.post('https://tictacticalbackend.up.railway.app/api/login', { email, password });
      const data = response.data;
      console.log('Response data:', data);
      if (response.status === 200) {
        localStorage.setItem('authToken', data.token); // Store the token
        localStorage.setItem('userEmail', email); // Store the email
        console.log('Token stored in localStorage:', data.token);
        onLogin(data.token, email); // Update the state in the parent component
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert(error.response ? error.response.data.error : 'An error occurred during login.');
    }
  };

  return (
    <form onSubmit={handleLogin} className="auth-form">
      <h2>Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
