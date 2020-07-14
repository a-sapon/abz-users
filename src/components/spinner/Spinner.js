import React from 'react';
import Loader from 'react-loader-spinner';
import './spinner.scss';

const Spinner = () => (
  <div className='overlay'>
    <Loader
      type='TailSpin'
      color='#1b4a8a'
      height={100}
      width={100}
      timeout={5000}
      className='spinner'
    />
  </div>
);

export default Spinner;