import React from 'react';
import Navbar from './navbar/Navbar';
import Banner from './banner/Banner';
import AboutSection from './aboutSection/AboutSection';
import UsersSection from './usersSection/UsersSection';
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
      </main>
    </>
  );
}

export default App;
