import React from 'react';
import { closeMobileMenu } from '../../../redux/actionCreators';
import { connect } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './navMenu.scss';

const NavMenu = ({ closeMobileMenu }) => {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      closeMobileMenu();
    }
  };

  return (
    <div onClick={handleClick} className='overlay'>
      <div className='navmenu'>
        <a href='# ' className='navmenu-logo'>
          logo
        </a>
        <ul className='navmenu-list'>
          <li className='navmenu-list_item'>
            <AnchorLink href='#register'>About me</AnchorLink>
          </li>
          <li className='navmenu-list_item'>
            <AnchorLink href='#register'>Relationships</AnchorLink>
          </li>
          <li className='navmenu-list_item'>
            <AnchorLink href='#register'>Users</AnchorLink>
          </li>
          <li className='navmenu-list_item'>
            <AnchorLink href='#register'>Sign up</AnchorLink>
          </li>
          <li className='navmenu-list_item'>
            <AnchorLink href='#register'>Terms and Conditions</AnchorLink>
          </li>
        </ul>

        <ul className='navmenu-list'>
          <li className='navmenu-list_item'>
            <AnchorLink href='#register'>How it works</AnchorLink>
          </li>
          <li className='navmenu-list_item'>
            <AnchorLink href='#register'>Partnership</AnchorLink>
          </li>
          <li className='navmenu-list_item'>
            <AnchorLink href='#register'>Help</AnchorLink>
          </li>
          <li className='navmenu-list_item'>
            <AnchorLink href='#register'>Leave testimonial</AnchorLink>
          </li>
          <li className='navmenu-list_item'>
            <AnchorLink href='#register'>Contact us</AnchorLink>
          </li>
        </ul>

        <ul className='navmenu-list'>
          <li className='navmenu-list_item'>
            <AnchorLink href='#register'>Articles</AnchorLink>
          </li>
          <li className='navmenu-list_item'>
            <AnchorLink href='#register'>Our news</AnchorLink>
          </li>
          <li className='navmenu-list_item'>
            <AnchorLink href='#register'>Testimonials</AnchorLink>
          </li>
          <li className='navmenu-list_item'>
            <AnchorLink href='#register'>Licenses</AnchorLink>
          </li>
          <li className='navmenu-list_item'>
            <AnchorLink href='#register'>Privacy Policy</AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default connect(null, { closeMobileMenu })(NavMenu);
