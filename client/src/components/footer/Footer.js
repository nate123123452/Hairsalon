import React from 'react'
import './Footer.css'
import yelpImage from '../navbar/yelp.jpg'
import facebookImage from '../navbar/facebook.jpg'
import instaImage from '../navbar/instagram.jpg'

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
              <img className = "navbar-socials-pic" src = {yelpImage} alt='yelp'></img>
            </a>
            <a href='https://www.facebook.com/hairtistic.rsm/' target = '_blank' rel='noreferrer'>
              <img className = "navbar-socials-pic" src = {facebookImage} alt='facebook'></img>
            </a>
            <a href = 'https://www.instagram.com/hairtistic.rsm/?hl=en' target = '_blank' rel='noreferrer'>
              <img className = "navbar-socials-pic" src = {instaImage} alt='instagram'></img>
            </a>
          </li>
      <p className = 'footer-end'>
        ©2023 by Hairtistic RSM.
      </p>
    </div>
  )
}

export default Footer
