import React from 'react';
import Navbar from './navbar/Navbar';
import Banner from './banner/Banner';
import AboutSection from './aboutSection/AboutSection';
import UsersSection from './usersSection/UsersSection';
import RegisterForm from './registerForm/RegisterForm';
import Footer from './footer/Footer';
import './app.scss';

function App() {
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
    </>
  );
}

export default App;
