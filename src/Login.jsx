import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Make sure to create this CSS file for styling

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="Email">Username</label>
            <input type="text" id="Email" className="form-control" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn btn-primary mb-4">Login</button>
        </form>
        <p className="login-text">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
