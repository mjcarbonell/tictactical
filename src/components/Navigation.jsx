import React, { useState, useEffect } from 'react';

function Navigation({ authToken, userEmail, onLoginClick, onRegisterClick, onLogout }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    onLogout();
    setShowDropdown(false);
  };

  return (
    <div className="navigation">
      {authToken ? (
        <div className="logged-in">
          <button className="logged-in" onClick={() => setShowDropdown(!showDropdown)}>
            Logged in as: {userEmail}
          </button>
          {showDropdown && (
            <div className="dropdown">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      ) : (
        <div className="logged-out">
          <button onClick={onLoginClick}>Login</button>
          <button onClick={onRegisterClick}>Register</button>
        </div>
      )}
    </div>
  );
}

export default Navigation;
