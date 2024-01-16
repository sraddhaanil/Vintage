import React from "react";
import "../styles/Footer.css";
import logoImage from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faGooglePlay,
  faApple,
  faGooglePay,
  faCcVisa,
  faCcMastercard,
  

} from "@fortawesome/free-brands-svg-icons";


import { faEnvelope, faPhone, faThumbsUp,faIndianRupeeSign, } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
   
      <div className="content">
        <div>
          <p> Follow us on</p>
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} id="social-icons" />
          </a>
          <a href="https://www.facebook.com/login/">
            <FontAwesomeIcon icon={faFacebook} id="social-icons" />
          </a>
          <a href="https://twitter.com/i/flow/login">
            <FontAwesomeIcon icon={faTwitter} id="social-icons" />
          </a>
          
        </div>
        <div>
        <div className="contact-heading">
        <p>Contact Us</p>
        <FontAwesomeIcon icon={faGooglePay} />
      </div>
          <table>
            <tr>
              <td>
                <FontAwesomeIcon icon={faPhone} id="contact-icons" />
              </td>
              <td>+91-9876543210</td>
            </tr>
            <td>
              <FontAwesomeIcon icon={faEnvelope} id="contact-icons" />
            </td>
            <td className="email">vintage@gmail.com</td>
          </table>
        </div>
        <div className="Payment-method">
        <p>Payment Method</p>
        <FontAwesomeIcon icon={faGooglePay} id="payment-icon"/>
        <FontAwesomeIcon icon={faCcVisa} id="payment-icon"/>
        <FontAwesomeIcon icon={faCcMastercard} id="payment-icon" />
        <FontAwesomeIcon icon={faIndianRupeeSign} id="payment-icon"/>
        </div>
        <div className="subscribe">
          <p>Subscription form</p>
          <input type="email" id="email" className="text-box" placeholder="Enter your email id" />
          <button><FontAwesomeIcon icon={faThumbsUp} /> Subscribe</button>
        </div>
      </div>
      <div>
      <img src={logoImage} alt="Logo" className=" logo-footer" />
      </div>

      <div class="download-buttons-container">
      <a
      href="https://play.google.com/store"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline-light btn-lg download-button">
      <FontAwesomeIcon icon={faGooglePlay} /> Get it on Google Play
    </a>
    <a
    href="https://apps.apple.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-outline-light btn-lg download-button">
    <FontAwesomeIcon icon={faApple} /> Get it on the App Store
  </a>

    </div>
    </div>
  );
}

export default Footer;
