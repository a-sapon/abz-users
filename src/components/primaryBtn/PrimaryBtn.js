import React from 'react';
import './primaryBtn.scss';

const PrimaryBtn = ({ name, type, onHandleClick }) => (
  <button type={type} className='primary-btn' onClick={onHandleClick}>
    {name}
  </button>
);

export default PrimaryBtn;
