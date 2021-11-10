import React from 'react';
// import Image from 'react-bootstrap/Image'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      
      <nav>

        <div>
          {/* <Image src="https://res.cloudinary.com/yourladyred20/image/upload/v1636511320/pw/Red_Ebron_2_ufrbb4.png" fluid /> */}
          <img src="https://res.cloudinary.com/yourladyred20/image/upload/v1636511320/pw/Red_Ebron_2_ufrbb4.png" className="signature" />
        </div>
        
        <div className="nav-links">
            <NavLink to="/" className="navbutton">Home</NavLink>
            <NavLink to="/resume" className="navbutton">Resume</NavLink>
            <NavLink to="/portfolio" className="navbutton">Portfolio</NavLink>
            <NavLink to="/newproject" className="navbutton">New Project</NavLink>
        </div>
            
      </nav>

    </div>
  );
}

export default NavBar;