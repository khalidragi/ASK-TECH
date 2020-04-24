import React from 'react';
import helmet from '../../assets/helmet.png';
import hero from '../../assets/hero.jpg';
import './landing.scss';

const Landing = () => {
  return (
    <div className="landing">
      <div className="hero">
        <div className="image">
          <img src={hero} alt="" />
        </div>
        <div className="content">
          <div className="left">
            <p>Reliable Service</p>
            <p>Innovative Progress</p>
            <p>Competitive Pricing</p>
          </div>
          <div className="right">
            <h1>
              A<span>S</span>K<span> TECH</span> GROUP
            </h1>
            <h3>Ask For Anything, We will make it happen.</h3>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="image">
          <img src={helmet} alt="" />
        </div>
        <div className="content">
          <div className="card">
            <h4>RESPECT</h4>
            <p>We serve our clients with humility and respect.</p>
          </div>
          <div className="card">
            <h4>INTEGRITY</h4>
            <p>
              We are honest in all our business procedures with clients as well
              as with our colleagues internally. Our moral standards give us the
              basis for taking pride in all our actions and strengthen our
              belief in what we are doing
            </p>
          </div>
          <div className="card">
            <h4>ESSENTIALISM</h4>
            <p>
              We exert efforts and focus to achieve maximum performance and
              potimum output
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
