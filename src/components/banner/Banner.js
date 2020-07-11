import React from 'react';
import './banner.scss';

const Banner = () => {
  return (
    <div className='banner'>
      <h1 className='banner-title'>
        Test assignment for Frontend Developer position
      </h1>
      <p className='banner-text'>
        We kindly remind you that your test assignment should be submitted as a
        link to github/bitbucket repository.
      </p>
      <button type='button' className='banner-btn'>
        Sing up now
      </button>
    </div>
  );
};

export default Banner;
