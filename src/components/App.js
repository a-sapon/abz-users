import React, { createContext, useState, useEffect } from 'react';
import Navbar from './navbar/Navbar';
import Banner from './banner/Banner';
import AboutSection from './aboutSection/AboutSection';
import UsersSection from './usersSection/UsersSection';
import RegisterForm from './registerForm/RegisterForm';
import Footer from './footer/Footer';
import Spinner from './spinner/Spinner';
import Modal from './modal/Modal';
import NavMenu from './navbar/navMenu/NavMenu';
import { connect } from 'react-redux';
import Swipe from 'react-easy-swipe';
import { CSSTransition } from 'react-transition-group';
import { closeMobileMenu } from '../redux/actionCreators';
import '../styles/modalAnimation.scss';
import './app.scss';

export const ScreenContext = createContext();

function App({ spinner, modal, mobileMenuOpen, closeMobileMenu }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth < 768) setIsMobile(true);
      else setIsMobile(false);

      if (window.innerWidth >= 1024) setIsDesktop(true);
      else setIsDesktop(false);
    };
    checkScreenWidth();
  }, []);

  const swipeHandler = () => {
    console.log('swipe');
    closeMobileMenu();
  };

  return (
    <ScreenContext.Provider value={{ isMobile, isDesktop }}>
      <Swipe onSwipeLeft={swipeHandler}>
        <header>
          <Navbar />
        </header>
        <main>
          <Banner />
          <AboutSection />
          <UsersSection />
          <RegisterForm />
        </main>
        <Footer />

        {mobileMenuOpen && <NavMenu />}
      </Swipe>

      <CSSTransition
        in={modal.open}
        timeout={300}
        classNames='modalAnimation'
        unmountOnExit
      >
        <Modal response={modal.response} />
      </CSSTransition>

      {spinner && <Spinner />}
    </ScreenContext.Provider>
  );
}

const mapStateToProps = ({ spinner, modal, mobileMenuOpen }) => ({
  spinner,
  modal,
  mobileMenuOpen,
});

export default connect(mapStateToProps, { closeMobileMenu })(App);
