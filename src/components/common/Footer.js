import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact-us">
          <h3>Contact us</h3>
          <p>Address: amet, consetetur sadipscing elitr, sed diam</p>
          <p>Email id: elirmad tempor invidunt ut labore et dolore</p>
          <p>Phone no: 123456789</p>
        </div>
        <div className="footer-section follow-us">
          <h3  className="follow">Follow us</h3>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="footer-section head-office ">
          <h3>Head Office</h3>
          <p><i className="fas fa-map-marker-alt"></i> Lorem ipsum dolor sit amet...</p>
          <p><i className="fas fa-clock"></i> Lorem ipsum dolor sit amet...</p>
          <p><i className="fas fa-clock"></i> Lorem ipsum dolor sit amet...</p>
          <p><i className="fas fa-building"></i> Lorem ipsum asd asdsaweeq Lorem Ipsum</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2021 All Rights Reserved. <a href="#">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
