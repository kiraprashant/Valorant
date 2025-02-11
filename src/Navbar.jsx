import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">Valorant Overview</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/" exact>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/maps">About us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/arsenal">Contact us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Particapate">Participate</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar; 