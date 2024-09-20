import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import hairtisticImage from './hairtistic.jpg'
import yelpImage from './yelp.jpg'
import facebookImage from './facebook.jpg'
import instaImage from './instagram.jpg'

const Navbar = () => {
  return (
    <nav className = "navbar">

      <div className = "navbar-left">
         <img className = "navbar-salon-image" src = {hairtisticImage} alt = 'logo'/>
         <h1 className = "navbar-name">Hairtistic RSM</h1>
      </div>

      <ul className = "navbar-right">
      <li className="navbar-item">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
      </li>
      <li className="navbar-line">|</li>
      <li className="navbar-item">
        <NavLink to="/services" activeClassName="active">Services</NavLink>
      </li>
      <li className="navbar-line">|</li>
      <li className="navbar-item">
        <NavLink to="/reviews" activeClassName="active">Reviews</NavLink>
      </li>
      <li className="navbar-line">|</li>
      <li className="navbar-item">
        <NavLink to="/policies" activeClassName="active">Policies</NavLink>
      </li>
      <li className="navbar-line">|</li>
      <li className="navbar-item">
        <NavLink to="/careers" activeClassName="active">Careers</NavLink>
      </li>


          <li className = "navbar-socials">
            <a href='https://www.yelp.com/biz/hairtistic-rsm-rancho-santa-margarita' target ='_blank' rel='noreferrer'>
              <img className = "navbar-socials-pic" src = {yelpImage} alt ='yelp'></img>
            </a>
            <a href='https://www.facebook.com/hairtistic.rsm/' target = '_blank' rel='noreferrer'>
              <img className = "navbar-socials-pic" src = {facebookImage} alt ='facebook'></img>
            </a>
            <a href = 'https://www.instagram.com/hairtistic.rsm/?hl=en' target = '_blank' rel='noreferrer'>
              <img className = "navbar-socials-pic" src = {instaImage} alt ='instagram'></img>
            </a>
          </li>

      </ul>
    </nav>
  )
}

export default Navbar
