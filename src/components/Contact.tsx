"use client"

import "../styles/Contact.css"

const Contact = () => {


  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>

          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info-content">
              <h4>Address</h4>
              <p>123 Main Street, New York, NY 10001</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="info-content">
              <h4>Email</h4>
              <p>john@example.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="info-content">
              <h4>Phone</h4>
              <p>+1 (123) 456-7890</p>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
