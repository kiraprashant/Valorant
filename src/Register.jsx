import React from 'react';
import './Login.css'; // Reuse the same CSS for styling
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" placeholder="Enter your password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" className="form-control" placeholder="Confirm your password" />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" id="mobile" className="form-control" placeholder="Enter your mobile number" />
          </div>
          <button type="submit" className="btn btn-primary mb-5">Register</button>
        </form>
        <p className="login-text">
          Already have the account? <Link to="/login">Click here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register; 