import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Make sure to create this CSS file for styling

function Login() {
  const [Login,setLogin] = useState({
    Email:"",
    Password:""
  })

  const HandleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value

    setLogin({...Login,[name]:value})
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="text" id="Email" name="Email" value={Login.Email} onChange={(e)=> HandleChange(e)} className="form-control" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="Password" value={Login.Password} onChange={(e)=> HandleChange(e)} className="form-control" placeholder="Enter your password" />
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
