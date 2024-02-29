import "./Navbar.css";
import {useState} from 'react';
import logo_light from '../assets/tg-black.png'
import search_icon_light from '../assets/search-w.png'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <Link to="#" className='menu-bars'>
          <FaBars />
        </Link>

        <img src={logo_light} alt="" className="logo"/>
        <ul>
          <li> Products </li>
          <li> Features </li>
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