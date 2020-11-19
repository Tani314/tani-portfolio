import React from "react";

const Navbar = props => {
  return (
    <nav className="navbar">
      <div className="nav-text">
        <div>
          <a href="#home">Home</a>
        </div>
        <div>
          <a href="#about"> About</a>
        </div>
        <div>
          <a href="#portfolio">Portfolio</a>
        </div>
        <div>
          <a href="#skills">Skills</a>
        </div>
        <div>
          <a href="#contact"> Contact</a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
