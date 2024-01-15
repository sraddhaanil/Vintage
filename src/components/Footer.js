import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <h4 id="footer-heading">Vintage</h4>
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
          <a href="https://www.youtube.com/">
            <FontAwesomeIcon icon={faYoutube} id="social-icons" />
          </a>
        </div>
        <div>
          <p>Contact Us</p>
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
            <td>vintage@gmail.com</td>
          </table>
        </div>
        <div className="subscribe">
          <p>Subscription form</p>
          <label for="email">Email</label>
          <input type="email" id="email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
