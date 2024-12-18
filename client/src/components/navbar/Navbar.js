import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import hairtisticImage from '../../assets/images/hairtistic.jpg'
import { FaFacebook, FaYelp, FaInstagram, FaBars, FaTimes} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);


  useEffect(() => {
    // Toggle body scroll when menu opens/closes
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    }
    
      // Cleanup function
      return () => {
        document.body.style.overflow = 'unset';
        document.body.style.position = 'static';
        document.body.style.width = 'auto';
      };
    }, [isOpen]);


  return (
    <nav className = "navbar">

      <div className = "navbar-left">
         <img className = "navbar-salon-image" src = {hairtisticImage} alt = 'logo'/>
         <h1 className = "navbar-name">HAIRTISTIC RSM</h1>
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
      <div className='navbar-right'>
        <div className = "navbar-socials">
          <a href='https://www.yelp.com/biz/hairtistic-rsm-rancho-santa-margarita' target ='_blank' rel='noreferrer'>
            <FaYelp className="navbar-socials-pic" style={{ color: '#FF1A1A' }} />
          </a>
          <a href='https://www.facebook.com/hairtistic.rsm/' target = '_blank' rel='noreferrer'>
            <FaFacebook className="navbar-socials-pic" style={{ color: '#1877F2' }} />
          </a>
          <a href = 'https://www.instagram.com/hairtistic.rsm/?hl=en' target = '_blank' rel='noreferrer'>
            <FaInstagram className="navbar-socials-pic" style={{ color: '#E4405F' }} />
          </a>
        </div>

        <button className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (<FaTimes size={24} />) :  (<FaBars size={24}/>)}
        </button>
      </div>
        <AnimatePresence>
          {isOpen && (
            <motion.ul 
              className="mobile-navbar"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <li className="mobile-navbar-item">
                <NavLink exact to="/" activeClassName="active" onClick={() => setIsOpen(false)}>Home</NavLink>
              </li>
              <li className="mobile-navbar-item">
                <NavLink to="/services" activeClassName="active" onClick={() => setIsOpen(false)}>Services</NavLink>
              </li>
              <li className="mobile-navbar-item">
                <NavLink to="/reviews" activeClassName="active" onClick={() => setIsOpen(false)}>Reviews</NavLink>
              </li>
              <li className="mobile-navbar-item">
                <NavLink to="/policies" activeClassName="active" onClick={() => setIsOpen(false)}>Policies</NavLink>
              </li>
              <li className="mobile-navbar-item">
                <NavLink to="/careers" activeClassName="active" onClick={() => setIsOpen(false)}>Careers</NavLink>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      

    </nav>
  )
}

export default Navbar
