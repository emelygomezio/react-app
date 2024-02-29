import "./Navbar.css";
import logo_light from '../assets/tg-black.png'
import search_icon_light from '../assets/search-w.png'
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        {/*<link to="#" className='menu-bars'>
          <FaIcons.FaBars />
        </link>*/}

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