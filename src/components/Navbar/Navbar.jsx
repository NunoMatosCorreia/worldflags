import React from 'react';
import { Link } from 'react-router-dom' 

const Navbar = () => {
  return (
    <nav className="navbar-row-line navbar navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <span>
            <Link to="/">Home</Link>
          </span>
        </li>
        <li className="nav-item">
          <span>
            <Link to="/flags">Flags</Link>
          </span>
        </li>
        <li className="nav-item">
          <span>
            <Link to="/about">About</Link>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar