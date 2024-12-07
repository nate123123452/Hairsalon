import React from 'react'
import './Footer.css'
import { FaFacebook, FaYelp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className = 'footer'>
      <h1>Hairtistic RSM</h1>
      <p>
        28562 Oso Pkwy Ste I, Rancho Santa <br></br>
        Margarita, CA 92688 <br></br>
        (949)858-5113
      </p>
      <li className = "footer-socials">
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
      <p className = 'footer-end'>
        ©2023 by Hairtistic RSM.
      </p>
    </div>
  )
}

export default Footer
