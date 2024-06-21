import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { Menu } from './components/Menu'
import Register from './components/Register';
import Login from './components/Login';
import Navigation from './components/Navigation';
import { useGameStore } from "./store";

function App() {
  const [authToken, setAuthToken] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const { grade, setEmail  } = useGameStore((state) => ({
    grade: state.grade,
  }));


  useEffect(() => {
    // Check if token and email exist in localStorage
    const token = localStorage.getItem('authToken');
    const email = localStorage.getItem('userEmail');
    if (token && email) {
      setAuthToken(token);
      setUserEmail(email);
      setShowLogin(false);
    }
  }, []);

  const handleRegister = (token, email) => {
    console.log('Register token:', token);
    setAuthToken(token);
    setUserEmail(email);
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleLogin = (token, email) => {
    // console.log('Login token:', token);
    setAuthToken(token);
    setUserEmail(email);
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    setAuthToken(null);
    setUserEmail('');
    setShowLogin(true);
  };

  return (
    <>
      <Navigation
        authToken={authToken}
        userEmail={userEmail}
        onLoginClick={() => { setShowLogin(true); setShowRegister(false); }}
        onRegisterClick={() => { setShowRegister(true); setShowLogin(false); }}
        onLogout={handleLogout}
      />
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
        <Experience />
      </Canvas>
      <Menu />
      {/* if the authToken doesn't exist and showLogin is true then we show login*/}
      {!authToken && showLogin && <Login onLogin={handleLogin} />} 
      {!authToken && showRegister && <Register onRegister={handleRegister} />}
    </>
  );
}

export default App;
