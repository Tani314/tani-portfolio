import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar = (props) => {
  return(
    <nav className="navbar navbar-default">
    <div className="container">
              <NavLink to="/" activeClassName="active" >Home</NavLink>
              <br/>
              <NavLink to="about" activeClassName="active"
               > About</NavLink>
               <br/>
              <NavLink to="portfolio" activeClassName="active"
              >Portfolio</NavLink>
                <br/>
              <NavLink to='skills' >Skills</NavLink>
              <br/>
              <NavLink to ='contact' > Contact</NavLink>
    </div>
  </nav>
  )
}
export default Navbar
