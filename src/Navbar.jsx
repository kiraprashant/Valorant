import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">Valorant Overview</NavLink>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse desktop-navbar" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/" exact>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/particapate">Participate</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
          </ul>
        </div>


      </nav>
      {/* <div className={`mobile-navbar ${isOpen ? "show" : ""}`} >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/" exact>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/particapate">Participate</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
          </ul>
        </div> */}
    </header>
  );
}

export default Navbar; 