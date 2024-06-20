import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [authToken, setAuthToken] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
      setShowLogin(false);
    }
  }, []);

  useEffect(() => {
    console.log('AUTH TOKEN:', authToken);
  }, [authToken]);

  const handleRegister = (token) => {
    console.log('Register token:', token);
    setAuthToken(token);
    setShowLogin(false);
  };

  const handleLogin = (token) => {
    console.log('Login token:', token);
    setAuthToken(token);
    setShowLogin(false);
  };

  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
        <Experience />
      </Canvas>
      {!authToken && (
        showLogin ? 
        <Login onLogin={handleLogin} /> : 
        <Register onRegister={handleRegister} />
      )}
    </>
  );
}

export default App;
