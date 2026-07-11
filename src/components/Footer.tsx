// import './Footer.css';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section">
          <h3 className="footer-title">Aegis Gate International</h3>
          <p className="footer-text">
            <i className="fas fa-map-marker-alt"></i> Hong Kong
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-section">
          <h4 className="footer-title">Contact Info</h4>
          <p className="footer-text">
            <i className="fas fa-phone"></i> <a className="links" href="tel:+201000474416">+20 10 00474416</a>
          </p>
          <p className="footer-text">
            <i className="fab fa-whatsapp"></i> <a className="links" href="https://wa.me/201000474416" target="_blank" rel="noopener noreferrer">+20 10 00474416</a>
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h4 className="footer-title">Get in Touch</h4>
          <p className="footer-text">
            <i className="fas fa-globe"></i> <a className="links" href="https://www.aegisgateinternational.com" target="_blank" rel="noopener noreferrer">www.aegisgateinternational.com</a>
          </p>
          <p className="footer-text">
            <i className="fas fa-at"></i> <a className="links" href="mailto:info@aegisgateinternational.com">info@aegisgateinternational.com</a>
          </p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <p className="footer-text">
            <i className="fab fa-instagram"></i> <a className="links" href="https://www.instagram.com/aegisgateinternational" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
          <p className="footer-text">
            <i className="fab fa-linkedin"></i> <a className="links" href="https://www.linkedin.com/company/aegis-gate-international/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
          <p className="footer-text">
            <i className="fab fa-facebook"></i> <a className="links" href="https://www.facebook.com/share/19GwUecv2b/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </p>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>Copyright © 2025 - Aegis Gate International - All Rights Reserved.</p>
      </div>
    </footer>
  );
}
