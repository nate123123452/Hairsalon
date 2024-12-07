import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import hairtisticImage from '../../assets/images/hairtistic.jpg'
import { FaFacebook, FaYelp, FaInstagram, FaBars} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className = "navbar">

      <div className = "navbar-left">
         <img className = "navbar-salon-image" src = {hairtisticImage} alt = 'logo'/>
         <h1 className = "navbar-name">Hairtistic RSM</h1>
      </div>

      <ul className={`desktop-navbar ${isOpen ? 'active' : ''}`}>
        <li className="navbar-item">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/services" activeClassName="active">Services</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/reviews" activeClassName="active">Reviews</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/policies" activeClassName="active">Policies</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/careers" activeClassName="active">Careers</NavLink>
        </li>
      </ul>

        <li className = "navbar-socials">
          <a href='https://www.yelp.com/biz/hairtistic-rsm-rancho-santa-margarita' target ='_blank' rel='noreferrer'>
            <FaYelp className="navbar-socials-pic" style={{ color: '#FF1A1A' }} />
          </a>
          <a href='https://www.facebook.com/hairtistic.rsm/' target = '_blank' rel='noreferrer'>
            <FaFacebook className="navbar-socials-pic" style={{ color: '#1877F2' }} />
          </a>
          <a href = 'https://www.instagram.com/hairtistic.rsm/?hl=en' target = '_blank' rel='noreferrer'>
            <FaInstagram className="navbar-socials-pic" style={{ color: '#E4405F' }} />
          </a>
        </li>

        <button className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <FaBars size={24} />
        </button>

        {isOpen && (
          <ul className="mobile-navbar">
            <li className="navbar-item">
              <NavLink exact to="/" activeClassName="active" onClick={() => setIsOpen(false)}>Home</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/services" activeClassName="active" onClick={() => setIsOpen(false)}>Services</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/reviews" activeClassName="active" onClick={() => setIsOpen(false)}>Reviews</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/policies" activeClassName="active" onClick={() => setIsOpen(false)}>Policies</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/careers" activeClassName="active" onClick={() => setIsOpen(false)}>Careers</NavLink>
            </li>
          </ul>
        )}
      

    </nav>
  )
}

export default Navbar
