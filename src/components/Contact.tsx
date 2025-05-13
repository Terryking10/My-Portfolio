"use client";


import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../styles/Contact.css";


library.add(fas, fab);

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="section-title">Neem contact op</h2>

      <div className="contact-container">
        <div className="contact-info">
          <br />
          <h3>Get in Touch</h3>
            <p>
            Aarzel niet om contact met me op te nemen. Ik ben altijd open voor het bespreken van nieuwe projecten, creatieve ideeën of kansen om deel uit te maken van jouw visie.
            </p>

          
          <div className="info-item">
            <div className="info-icon">
              <FontAwesomeIcon icon="map-marker-alt" />
            </div>
            <div className="info-content">
              <h4>Address</h4>
              <p>Antwerpen, Belgie</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div className="info-content">
              <h4>Email</h4>
              <p> BoatengTerry@outlook.com</p>
            </div>
          </div>

        
          <div className="info-item">
            <div className="info-icon">
              <FontAwesomeIcon icon="phone" />
            </div>
            <div className="info-content">
              <h4>Phone</h4>
              <p>+32 498 02 36 55</p>
            </div>
          </div>

         
          <div className="social-links">
            <a href="www.linkedin.com/in/terry-boateng-56a215201" className="social-link">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
            <a href="https://github.com/Terryking10" className="social-link">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;