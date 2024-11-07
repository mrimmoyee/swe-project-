import React from 'react';
import 'style.css'; // Import the associated CSS file

const FooterSection = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-column">
          <ul>
            <li><a href="#">What Is autism?</a></li>
            <li><a href="#">Help & information</a></li>
            <li><a href="#">Our work</a></li>
            <li><a href="#">Get involved</a></li>
            <li><a href="#">Community stories</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Offices</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li><a href="#">Corporate partners</a></li>
            <li><a href="#">State fundraising notices</a></li>
            <li><a href="#">Autism Speaks Canada</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <p>Need personalized support?</p>
          <p>
            Our Autism Response Team (ART) is specially trained to connect people with autism,
            their families, and caretakers to information, tools, and resources.
          </p>
          <a href="#" className="contact-link">Get in touch with ART</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <img src="logo1.png" alt="Autism Speaks" />
          <img src="logo2.png" alt="Charity Navigator" />
          <img src="logo3.png" alt="Platinum Transparency" />
          <img src="logo4.png" alt="Accredited Charity" />
        </div>
        <div className="footer-right">
          <a href="#" className="btn donate-btn">Donate</a>
          <a href="#" className="btn signup-btn">Sign up now!</a>
          <div className="social-media">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
