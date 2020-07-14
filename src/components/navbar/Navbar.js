import React from 'react';
import './navbar.scss';
import '../app.scss';

const Navbar = () => (
  <nav className='nav'>
    <div className='nav-bar container'>
      <a href='# ' className='nav-bar_logo'>logo</a>
      <div className='nav-bar_burger'></div>
    </div>
  </nav>
);

export default Navbar;
