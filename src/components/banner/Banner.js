import React from 'react';
import './banner.scss';
import PrimaryBtn from '../primaryBtn/PrimaryBtn';

const Banner = () => {
  return (
    <section className='banner container'>
      <h1 className='banner-title'>
        Test assignment for Frontend Developer position
      </h1>
      <p className='banner-text'>
        We kindly remind you that your test assignment should be submitted as a
        link to github/bitbucket repository.
      </p>
      <a href='#register'>
        <PrimaryBtn name='Sing up now' type='button' />
      </a>
    </section>
  );
};

export default Banner;
