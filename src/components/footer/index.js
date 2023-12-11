import React from "react";
import "./style.css";
import Logo from "../../assets/logosmall.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-background">
        <div className="footer-container">
          <img src={Logo} alt="Little Lemon logo" />
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally sourced menu with daily specials.
          </p>
          <div className="footer-content">
            <div className="locations">
              <h5>LOCATIONS</h5>
              <ul>
                <li>Downttown</li>
                <li>Uppertown</li>
                <li>Coast</li>
                <li>Central</li>
              </ul>
            </div>
            <div className="opening-times">
              <h5>OPENING TIMES</h5>
              <ul>
                <li>Mon - Wed: 10:30AM - 12:00AM</li>
                <li>Fri: 12:00PM - 1:00AM</li>
                <li>Sat - Sun: 10:30AM - 12:00AM</li>
              </ul>
            </div>
            <div className="contact">
              <h5>CONTACT US</h5>
              <ul>
                <li>123 Broad st, Columbus - Downtown</li>
                <li>Tel: 614 123 3456li</li>
                <li>Email: info@littlelemon.com</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
