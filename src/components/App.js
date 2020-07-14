import React from 'react';
import Navbar from './navbar/Navbar';
import Banner from './banner/Banner';
import AboutSection from './aboutSection/AboutSection';
import UsersSection from './usersSection/UsersSection';
import RegisterForm from './registerForm/RegisterForm';
import Footer from './footer/Footer';
import Spinner from './spinner/Spinner';
import Modal from './modal/Modal';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './app.scss';
import './modal/animation.scss';

function App({ spinner, modal }) {
  return (
    <>
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
      {spinner && <Spinner />}
      <CSSTransition
        in={modal.open}
        timeout={300}
        classNames='animation'
        unmountOnExit
      >
        <Modal response={modal.response} />
      </CSSTransition>
    </>
  );
}

const mapStateToProps = ({ spinner, modal }) => ({
  spinner,
  modal,
});

export default connect(mapStateToProps)(App);
