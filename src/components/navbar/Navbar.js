import React, { useContext } from 'react';
import { ScreenContext } from '../App';
import NavList from './navList/NavList';
import './navbar.scss';
import '../app.scss';

const Navbar = () => {
  const { isDesktop } = useContext(ScreenContext);

  return (
    <nav className='nav'>
      <div className='nav-bar container'>
        <a href='# ' className='nav-bar_logo'>logo</a>
        {!isDesktop ? <div className='nav-bar_burger'></div> : <NavList />}
      </div>
    </nav>
  );
}

export default Navbar;
