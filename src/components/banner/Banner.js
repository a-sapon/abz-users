import React, { useContext } from 'react';
import PrimaryBtn from '../primaryBtn/PrimaryBtn';
import { ScreenContext } from '../App';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './banner.scss';
import '../app.scss';

const Banner = () => {
  const { isMobile } = useContext(ScreenContext);

  return (
    <section className='banner'>
      <div className='container'>
        <h1 className='banner-title'>
          Test assignment for Frontend Developer position
        </h1>
        {isMobile ? (
          <p className='banner-text'>
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository.
          </p>
        ) : (
          <p className='banner-text'>
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository. Please be patient, we
            consider and respond to every application that meets minimum
            requirements. We look forward to your submission. Good luck! The
            photo has to scale in the banner area on the different screens
          </p>
        )}
        <AnchorLink href='#register'>
          <PrimaryBtn name='Sing up now' type='button' />
        </AnchorLink>
      </div>
    </section>
  );
};

export default Banner;
