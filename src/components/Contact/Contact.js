import React from 'react';
import './contact.scss';
import mobile from '../../assets/tablet.svg';
import email from '../../assets/at.svg';

const Contact = () => {
  return (
    <div className="contact">
      <div className="heading">
        <h2>
          <span className="first">Contact</span> a
          <span className="logo">s</span>k tech
        </h2>
      </div>
      <div className="bottom">
        <div className="form">
          <div className="title">
            <h3>Reach out to us!</h3>
            <p>
              Got a question about ASK TECH? Are you interested in partnering
              with us? Contact us:
            </p>
          </div>
          <form name="contact" method="POST" data-netlify="true">
            <input type="text" placeholder="first name" name="first name" />
            <input type="text" placeholder="last name" name="last name" />
            <input type="email" placeholder="your email address" name="email" />
            <textarea type="text" placeholder="message" name="message" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-info">
          <div className="title">
            <h3>Head office</h3>
            <p>Plot 421, Industrial Zone, Third Settlement, New Cairo.</p>
          </div>
          <div className="info">
            <div className="mobile">
              <div className="icon">
                <img src={mobile} alt="mobile" />
              </div>
              <div className="num">
                <p>+201022120000</p>
                <p>+201022120000</p>
              </div>
            </div>
            <div className="email">
              <div className="icon">
                <img src={email} alt="email" />
              </div>
              <div className="email-e">
                <p>info@askgroupegypt.com</p>
              </div>
            </div>
          </div>
          <div className="location">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.2284253295934!2d31.423702009087357!3d29.982104202417716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583b5f74358761%3A0x542f9c23ae03c047!2sMonginis%20Future%20Mall%2CThird%20Settlement!5e0!3m2!1sen!2ssa!4v1587762679195!5m2!1sen!2ssa"
                width="380"
                height="300"
                frameborder="0"
                style={{ border: 0 }}
                title="map"
                allowfullscreen="false"
                aria-hidden="false"
                tabindex="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
