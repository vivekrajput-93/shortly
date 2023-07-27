import React from 'react'
import "../CSS/Footer.css";
import book from "../images/icon-facebook.svg"
import pinterest from "../images/icon-pinterest.svg"
import twitter  from "../images/icon-twitter.svg"
import Gram from "../images/icon-instagram.svg"
import logo from "../images/logo.svg";


const Footer = () => {
  return (
    <div className='footer'>
        <div className='heading'>
            <img id='logo' src={logo} alt="logo" />
        </div>
        <div className='social'>
            <ul>
                <h3>Features</h3>
                <li>Link Shortening</li>
                <li>Branded links</li>
                <li>Analytics</li>
            </ul>
            <ul>
                <h3>Resources</h3>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
            </ul>
            <ul>
                <h3>Pricing</h3>
                <li>About </li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
            <div className='net'>
            <img src={book} alt='facebook' />
            <img src={twitter} alt='twitter' />
            <img src={pinterest} alt='pinterest' />
            <img src={Gram} alt='Instagram' />
        </div>
        </div>
    </div>
  )
}

export default Footer