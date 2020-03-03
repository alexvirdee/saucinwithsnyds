import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-success">
        <h1>
          <a href="index.html">
            <i className="fas fa-code"></i> Saucinwithsnyds
          </a>
        </h1>
        <ul>
          <li>
            <a href="#">Recipes</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
