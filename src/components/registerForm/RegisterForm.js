import React, { useEffect } from 'react';
import './registerForm.scss';
import '../app.scss';
import { fetchPositions } from '../../redux/operations';
import { connect } from 'react-redux';
import PrimaryBtn from '../primaryBtn/PrimaryBtn';

const RegisterForm = ({ fetchPositions, positions }) => {
  useEffect(() => {
    fetchPositions();
  }, []);

  return (
    <section className='register container'>
      <h2 id='register' className='register-title'>Register to get a work</h2>
      <p className='register-text'>
        Attention! After successful registration and alert, update the list of
        users in the block from the top
      </p>
  
      <form className='register-form'>
        <div className='register-form_inputWrap'>
          <label htmlFor='name' className='register-form_label'>Name</label>
          <input type='text' id='name' name='name' placeholder='Your name' className='register-form_input'></input>
        </div>
  
        <div className='register-form_inputWrap'>
          <label htmlFor='email' className='register-form_label'>Email</label>
          <input type='email' id='email' name='email' placeholder='Your email' className='register-form_input'></input>
        </div>
  
        <div className='register-form_inputWrap'>
          <label htmlFor='phone' className='register-form_label'>Phone number</label>
          <input type='number' id='phone' name='phone' placeholder='+380 XX XXX XX XX' className='register-form_input'></input>
          <p className='register-form_input-text'>Enter phone number in open format</p>
        </div>
  
        <h3 className='register-form_title'>Select your position</h3>
        <ul className='register-form_list'>
          {positions !== [] && positions.map(({ id, name }) =>
          <li key={id} className='register-form_list-item'>
            <input type='radio' name='position' id={id}></input>
            <label htmlFor={id} className='register-form_radioLabel'>{name}</label>
          </li>
          )}
        </ul>

        <h3 className='register-form_title'>Photo</h3>
        <div className='register-form_file'>
          <label htmlFor='file' className='register-form_file-label'>Upload your photo</label>
          <input type="file" name='file' id='file' className='register-form_file-input'></input>
        </div>

        <div className='register-form_btn'>
          <PrimaryBtn name='Sing up now' type='submit' />
        </div>
        
      </form>
    </section>
  );
}

const mapStateToProps = (state) => ({
  positions: state.positions
});

export default connect(mapStateToProps, { fetchPositions })(RegisterForm);
