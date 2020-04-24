import React from 'react';
import './about.scss';
import about from '../../assets/about.png';

const About = () => {
  return (
    <div className="about">
      <div className="upper">
        <div className="company">
          <h2>
            <span>our</span> company
          </h2>
          <p>
            ASK is an ambitious Steel and Metal works company led by
            professional owners and leaders all graduated from a multinational
            companies aiming to make ASK a steel and metal fabrications global
            icon rising from Egypt.
          </p>
          <p>
            Our trend is going up every quarter by adding a new service to our
            group to make sure that we can deliver any service requested by our
            partners/clients.
          </p>
          <p>
            ASK slogan is Ask For Anything related to steel and metals and we
            are working hard day and night to achieve our partners’ goals.
          </p>
        </div>
        <div className="image">
          <img src={about} alt="workers" />
        </div>
      </div>
      <div className="lower">
        <div className="line"></div>
        <div className="left">
          <h2>
            <span>our</span> mission
          </h2>
          <p>
            Is to deliver and supply the most noteworthy quality steel and metal
            products to our clients utilizing sustainable procedures, and
            achieve their goals in the easiest way for them.
          </p>
          <p>
            We trust that profoundly talanted and motivated employees are the
            way to accomplishing our goals and we will keep on providing
            outstanding training and investment in the future.
          </p>
        </div>
        <div className="right">
          <h2>
            <span>our</span> vision
          </h2>
          <p>
            Is to participate consistently in extending our generation limits
            and expanding our production capacities with a specific end goal to
            meet the epidemically developing Egyptian demand and therefore hold
            our position at the front line of the steel business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
