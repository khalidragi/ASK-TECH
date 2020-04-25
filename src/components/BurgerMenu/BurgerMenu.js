import React from 'react';
import { NavLink } from 'react-router-dom';
import './burgerMenu.scss';

const BurgerMenu = () => {
  const handleClick = () => {
    const toggler = document.querySelector('.toggler');
    toggler.checked = !toggler.checked;
  };
  return (
    <div className="burger-menu">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li>
                <NavLink as="a" to="/projects" onClick={handleClick}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink as="a" to="/about" onClick={handleClick}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink as="a" to="/gallery" onClick={handleClick}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink as="a" to="/contact" onClick={handleClick}>
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
