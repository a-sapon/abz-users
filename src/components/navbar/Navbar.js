import React from 'react';
import './navbar.scss';
import '../app.scss';

const Navbar = () => (
  <nav className='navbar container'>
    <a href='# ' className='navbar-logo'>logo</a>
    <div className='navbar-burger'></div>
  </nav>
);

export default Navbar;