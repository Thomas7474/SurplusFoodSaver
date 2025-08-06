import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

// Main App component to render the Login page
const App = () => {
  return <Login />;
};

// Login component
const Login = () => {


const navigate = useNavigate();


  // State to manage input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // State to manage message box visibility and content
  const [message, setMessage] = useState({ text: '', type: 'success', visible: false });

  // Function to show a temporary message
  const showMessage = (msg, type = 'success') => {
    setMessage({ text: msg, type: type, visible: true });
    // Hide message after 3 seconds
    setTimeout(() => {
      setMessage(prev => ({ ...prev, visible: false }));
    }, 3000);
  };

  // Event handler for Login button click
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission

    if (username && password) {
      showMessage(`Login attempt for: ${username}`, 'success');
      // In a real application, you would send this data to a server
      console.log('Login attempt:', { username, password });
    } else {
      showMessage('Please enter both username and password.', 'error');
    }
  };

  // Event handler for Create New Account button click
  const handleCreateAccount = (event) => {
    event.preventDefault(); // Prevent default button behavior
    navigate('/Signup');
    // In a real application, you would navigate to a registration page
    console.log('Create new account clicked');
  };

  return (
    <div className="login-page-container">
      {/* Message Box */}
      <div
        id="messageBox"
        className={`message-box ${message.visible ? 'visible' : 'hidden'} ${message.type}`}
      >
        {message.text}
      </div>

      <div className="login-card">
        <div className="text-center mb-8">
          <h1 className="main-title">Surplus Food Saver</h1>
          <p className="subtitle">Login to your account</p>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>
        </form>

        <div className="signup-option">
          <p>
            Don't have an account?
            <button
              onClick={handleCreateAccount}
              className="create-account-button"
            >
              Create new account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
