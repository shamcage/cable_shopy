import React, { useState } from 'react';
import './Login.css'; // Import your CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter username and password.');
      return;
    }

    // Simulate login request (replace with your API call)
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Login successful
        // Handle successful login (redirect, etc.)
        window.location.href = 'success.html'; // Redirect to success page
      } else {
        setErrorMessage(data.message || 'Login failed.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  const handleTogglePassword = () => {
    setPassword((prevPassword) => (prevPassword === '' ? 'text' : 'password'));
  };

  return (
    <div className="container">
      <h1 className="logo">Cable Shopy Login</h1>
      <form id="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type={password === '' ? 'password' : 'text'}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="toggle-password" onClick={handleTogglePassword}>
            <i className={password === '' ? 'fas fa-eye-slash' : 'fas fa-eye'} />
          </span>
        </div>
        <div className="form-group">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember Me</label>
        </div>
        <button type="submit">Login</button>
        <a href="#">Forgot Password?</a>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Login;
