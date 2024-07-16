import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"; // Import the YouTube icon
import "./Footer.css";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footerBody">
      <div className="footer-content">
        <div className="copyright">
          <p>
            Copyright All Right Reserved {currentYear} | Developed By: CDP Team
          </p>
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com/fastnuceskhi_official/" className="social-link" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://twitter.com/khi_nuces" className="social-link" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.facebook.com/FASTNUCESKHI" className="social-link" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.youtube.com/channel/UCDDvOIOvZMpT1XPzfFfLcFg" className="social-link" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a> {/* Include YouTube icon */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;