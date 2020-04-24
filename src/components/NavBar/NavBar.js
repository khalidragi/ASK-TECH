import React from 'react';
import { NavLink } from 'react-router-dom';
import askLogo from '../../assets/askLogo.svg';
import './navbar.scss';

const NavBar = () => {
  const active = { color: '#fba508' };
  return (
    <header className="nav-bar">
      <div className="brand-logo">
        <NavLink to="/" as="a">
          <img src={askLogo} alt="brand logo" />
        </NavLink>
      </div>
      <nav className="nav-links">
        <NavLink to="/projects" as="a" activeClassName={active}>
          Projects
        </NavLink>
        <NavLink to="/about" as="a" activeClassName={active}>
          About
        </NavLink>
        <NavLink to="/gallery" as="a" activeClassName={active}>
          Gallery
        </NavLink>
        <NavLink to="/contact" as="a" activeClassName={active}>
          Contact us
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
