import React, { useState } from 'react';
import './Signup.css'; // Import the dedicated CSS file
import { useNavigate } from 'react-router-dom';

const Signup = ({ onNavigate }) => {

    const navigate = useNavigate();

  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState({ text: '', type: 'success', visible: false });

  const showMessage = (msg, type = 'success') => {
    setMessage({ text: msg, type: type, visible: true });
    setTimeout(() => {
      setMessage(prev => ({ ...prev, visible: false }));
    }, 3000);
  };

  const handleSignup = (event) => {
    event.preventDefault();

    if (newUsername && newPassword) {
      showMessage(`Signing up user: ${newUsername}`, 'success');
      console.log('Signup attempt:', { newUsername, newPassword });
      onNavigate('login');
    } else {
      showMessage('Please fill in all fields.', 'error');
    }
  };

  return (
    <div className="signup-page-container">
      {message.visible && (
        <div className={`message-box ${message.type}`}>
          {message.text}
        </div>
      )}

      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>

        <div className="input-group">
          <label htmlFor="newUsername"><b>Set New Username:</b></label>
          <input
            type="text"
            id="newUsername"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            required
            className="input-field"
            placeholder="Choose a username"
          />
        </div>

        <div className="input-group">
          <label htmlFor="newPassword"><b>Set Password:</b></label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="input-field"
            placeholder="Create a password"
          />
        </div>

        <button
          type="submit"
          className="signup-button"
        >
          Sign Up
        </button>

        <button
          type="button"
          onClick={() =>  navigate('/')}
          className="back-to-login-button"
        >
          Back to Login
        </button>
      </form>
    </div>
  );
};

export default Signup;
