import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="hero-section-second">
        <div className="overlay"></div>
        <div className="content">
          <h1>Contact Us</h1>
          <Link href="/">Home</Link>
          <Link href="/contact-us">{" > "}Contact Us</Link>
        </div>
      </section>
    <section className="contact-section">
      <div className="contact-cards">
        <div className="contact-card">
          <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
          <h3>Locations</h3>
          <p>Hong Kong</p>
        </div>
        <div className="contact-card">
          <div className="icon"><i className="fas fa-phone"></i></div>
          <h3>Phone</h3>
          <p><a href="tel:+201000474416">+20 10 00474416</a></p>
        </div>
        <div className="contact-card">
          <div className="icon"><i className="fab fa-whatsapp"></i></div>
          <h3>WhatsApp</h3>
          <p><a href="https://wa.me/201000474416" target="_blank" rel="noopener noreferrer">+20 10 00474416</a></p>
        </div>
        <div className="contact-card">
          <div className="icon"><i className="fas fa-globe"></i></div>
          <h3>Website</h3>
          <p><a href="https://www.aegisgateinternational.com" target="_blank" rel="noopener noreferrer">www.aegisgateinternational.com</a></p>
        </div>
        <div className="contact-card">
          <div className="icon"><i className="fas fa-at"></i></div>
          <h3>Email</h3>
          <p><a href="mailto:info@aegisgateinternational.com">info@aegisgateinternational.com</a></p>
        </div>
        <div className="contact-card">
          <div className="icon"><i className="fab fa-instagram"></i></div>
          <h3>Instagram</h3>
          <p><a href="https://www.instagram.com/aegisgateinternational" target="_blank" rel="noopener noreferrer">@aegisgateinternational</a></p>
        </div>
        <div className="contact-card">
          <div className="icon"><i className="fab fa-linkedin"></i></div>
          <h3>LinkedIn</h3>
          <p><a href="https://www.linkedin.com/company/aegis-gate-international/" target="_blank" rel="noopener noreferrer">Aegis Gate International</a></p>
        </div>
        <div className="contact-card">
          <div className="icon"><i className="fab fa-facebook"></i></div>
          <h3>Facebook</h3>
          <p><a href="https://www.facebook.com/share/19GwUecv2b/" target="_blank" rel="noopener noreferrer">Aegis Gate International</a></p>
        </div>
      </div>

      <section className="modern-form-section">
        <div className="modern-form-container">
          <div className="modern-form-header">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
          <form
            action="https://formcarry.com/s/nZS1E5J7SHt"
            method="POST"
            className="modern-contact-form"
          >
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  placeholder=" " 
                  required 
                />
                <label htmlFor="name">Full Name</label>
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  placeholder=" " 
                  required 
                />
                <label htmlFor="email">Email Address</label>
              </div>
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                name="phone" 
                id="phone"
                placeholder=" " 
              />
              <label htmlFor="phone">Phone Number (Optional)</label>
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                id="message"
                placeholder=" " 
                required 
                rows={5}
              />
              <label htmlFor="message">Your Message</label>
            </div>
            <button type="submit" className="modern-submit-btn">
              <span>Send Message</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </section>
    </section>
    </div>
  );
}
