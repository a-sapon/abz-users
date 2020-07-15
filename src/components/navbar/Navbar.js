import React, { useContext } from 'react';
import { ScreenContext } from '../App';
import { openMobileMenu } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './navbar.scss';
import '../app.scss';

const Navbar = ({ openMobileMenu }) => {
  const { isDesktop } = useContext(ScreenContext);

  const handleBurgerClick = () => {
    openMobileMenu();
  };

  return (
    <nav className='nav'>
      <div className='nav-bar container'>
        <a href='# ' className='nav-bar_logo'>
          logo
        </a>
        {!isDesktop ? (
          <div onClick={handleBurgerClick} className='nav-bar_burger'></div>
        ) : (
          <ul className='nav-bar_list'>
            <li className='nav-bar_list-item'>
              <AnchorLink href='#register'>About me</AnchorLink>
            </li>
            <li className='nav-bar_list-item'>
              <AnchorLink href='#register'>Relationships</AnchorLink>
            </li>
            <li className='nav-bar_list-item'>
              <AnchorLink href='#register'>Requirements</AnchorLink>
            </li>
            <li className='nav-bar_list-item'>
              <AnchorLink href='#register'>Users</AnchorLink>
            </li>
            <li className='nav-bar_list-item'>
              <AnchorLink href='#register'>Sign up</AnchorLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default connect(null, { openMobileMenu })(Navbar);
