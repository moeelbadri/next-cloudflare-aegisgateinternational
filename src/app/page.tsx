import Link from "next/link";
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="content">
          <h1>
          AEGIS GATE INTERNATIONAL
          </h1>
          <p>
          "Moving The World Forward."
          </p>
        </div>
      </section>

      <section className="about-us">
        <h2 className="about-us-title">About Us</h2>
        <div className="about-us-wrapper">
          <div className="about-us-content">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>Aegis Gate International</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem', fontStyle: 'italic', color: '#666' }}>
              Parts • Power • Industrial Solutions
            </p>
            <p>
              Aegis Gate International is a multinational sourcing and supply company focused on heavy equipment ecosystems and industrial components, not on selling complete vehicles.
            </p>
            <p>
              We support construction fleets, industrial operators, railway projects, and civil aviation by providing:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>Specialized spare parts and accessories</li>
              <li>Diesel engines for vehicles and machinery</li>
              <li>Diesel generators and power units</li>
              <li>Selected railway, industrial, and civil-use aviation components</li>
            </ul>
            <p>
              Aegis Gate International is structured through international hubs across key markets, enabling us to serve clients in the Middle East, Africa, Europe, and Asia. We work with vetted manufacturers and production partners, and we manage the entire journey from technical specification and supplier selection to inspection, packing, and delivery.
            </p>
            <p style={{ marginTop: '1rem', fontWeight: '500' }}>
              Our role is simple: We connect serious projects with serious suppliers — reliably, quietly, and professionally.
            </p>
          </div>
          <Image
            src="/image.png"
            alt="Purpose"
            width={700}
            height={600}
            quality={75}
            loading="eager"
            className="about-us-image"
          />
        </div>
      </section>

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
    </div>
  );
}
