import "./Navbar.css";
import {useState} from 'react';
import logo_light from '../assets/tg-black.png'
import search_icon_light from '../assets/search-w.png'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <div className="navbar">


        <ul>
          <Link to="/"> <img src={logo_light} alt="" className="logo" /> </Link>
          {/*<Link to="/products"> Products </Link>*/}
          <Link to="/about"> About </Link>
        </ul>

        <div className= "search-box"> 
          <input type="text" placeholder="Search"/>
          <img src={search_icon_light} alt=""/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;



// import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="Navbar">
//       <ul>
//         {/* <Link to="/"> Home </Link> */}
//         {/* <Link to="/about"> About </Link> */}
//         {/* <Link to="/projects"> Projects </Link> */}
        
//         <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
//           Home
//         </NavLink>
        
//         <NavLink to="/about" className={({ isActive }) => isActive ? "selected" : ""}>
//           About
//         </NavLink>
        
//         <NavLink to="/projects" className={({ isActive }) => isActive ? "selected" : ""}>
//           Projects
//         </NavLink>
        
//       </ul>
      
//     </nav>
//   );
// }

//export default Navbar;