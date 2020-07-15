import React, { useEffect, useState } from 'react';
import { spinnerON, spinnerOFF, openModal } from '../../redux/actionCreators';
import { fetchToken, refreshUsers } from '../../redux/operations';
import { connect } from 'react-redux';
import PrimaryBtn from '../primaryBtn/PrimaryBtn';
import Positions from './positions/Positions';
import axios from 'axios';
import './registerForm.scss';
import '../app.scss';

const RegisterForm = ({
  fetchToken,
  token,
  refreshUsers,
  spinnerON,
  spinnerOFF,
  openModal
}) => {
  useEffect(() => {
    fetchToken();
  }, [fetchToken]);

  const [info, setInfo] = useState({ name: '', email: '', phone: '' });
  const [position, setPosition] = useState({ id: 1, name: 'Lawyer' });
  const [file, setFile] = useState(null);

  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [fileValid, setFileValid] = useState(true);

  const handleInputChange = (e) => {
    e.persist();
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePositionChange = (e) => {
    setPosition({
      id: +e.target.id,
      name: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const re = /.*\.(jpg|jpeg)$/;
    const file = e.currentTarget.files[0];
    if (!re.test(file.name.toLowerCase()) || file.size > 5000000) {
      setFileValid(false);
    } else {
      setFileValid(true);
      setFile(file);
    }

    // validate image dimentions (to be at least 70x70)
    const fr = new FileReader();
    fr.onload = function () {
      const img = new Image();
      img.onload = function () {
        if (img.width < 70 || img.height < 70) {
          setFileValid(false);
        } else setFileValid(true);
      };
      img.src = fr.result;
    };
    fr.readAsDataURL(e.currentTarget.files[0]);
  };

  // inputs validation
  const nameValidate = () => {
    const re = /^[a-zA-z -]{2,60}$/;
    if (!re.test(info.name)) {
      setNameValid(false);
    } else setNameValid(true);
  };

  const emailValidate = () => {
    const re = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    if (!re.test(info.email)) {
      setEmailValid(false);
    } else setEmailValid(true);
  };

  const phoneValidate = () => {
    const re = /^[+]{0,1}380([0-9]{9})$/;
    if (!re.test(info.phone)) {
      setPhoneValid(false);
    } else setPhoneValid(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      info.name === '' ||
      info.email === '' ||
      info.phone === '' ||
      file === null
    ) {
      return;
    }

    spinnerON();
    try {
    const formData = new FormData();
    formData.append('name', info.name);
    formData.append('email', info.email);
    formData.append('phone', info.phone);
    formData.append('position_id', position.id);
    formData.append('photo', file);

      const response = await axios.post(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users',
        formData,
        { headers: { Token: token, 'Content-Type': 'multipart/form-data' } }
      );

      if (response.data.success) {
        refreshUsers();
      } 
      spinnerOFF();
      openModal(response.data);
      fetchToken(); // get new token for possible next request
    } catch (err) {
      openModal(err.response.data)
      spinnerOFF();
    }

    // clear inputs after submit
    setInfo({ name: '', email: '', phone: '' });
    setPosition({ id: 1, name: 'Lawyer' });
    setFile(null);
  };

  return (
    <section id='register' className='register container'>
      <h2 className='register-title'>
        Register to get a work
      </h2>
      <p className='register-text'>
        Attention! After successful registration and alert, update the list of
        users in the block from the top
      </p>

      <form onSubmit={handleSubmit} className='register-form'>
        <div className='register-form_inputWrap'>
          <label htmlFor='name' className='register-form_label'>
            Name
          </label>
          <input
            onChange={handleInputChange}
            value={info.name}
            onBlur={nameValidate}
            type='text'
            id='name'
            name='name'
            placeholder='Your name'
            className={
              nameValid ? 'register-form_input' : 'register-form_inputWrong'
            }
          ></input>
          {!nameValid && (
            <p className='register-form_error'>
              Name should be from 2 to 60 characters long
            </p>
          )}
        </div>

        <div className='register-form_inputWrap'>
          <label htmlFor='email' className='register-form_label'>
            Email
          </label>
          <input
            onChange={handleInputChange}
            value={info.email}
            onBlur={emailValidate}
            type='email'
            id='email'
            name='email'
            placeholder='Your email'
            className={
              emailValid ? 'register-form_input' : 'register-form_inputWrong'
            }
          ></input>
          {!emailValid && (
            <p className='register-form_error'>Please enter a valid email</p>
          )}
        </div>

        <div className='register-form_inputWrap'>
          <label htmlFor='phone' className='register-form_label'>
            Phone number
          </label>
          <input
            onChange={handleInputChange}
            value={info.phone}
            onBlur={phoneValidate}
            type='tel'
            id='phone'
            name='phone'
            placeholder='+380 XX XXX XX XX'
            className={
              phoneValid ? 'register-form_input' : 'register-form_inputWrong'
            }
          ></input>
          {phoneValid ? (
            <p className='register-form_input-text'>
              Enter phone number in open format
            </p>
          ) : (
            <p className='register-form_error'>
              Phone number should start with +380 and contain 12 digits
            </p>
          )}
        </div>

        <Positions onHanleChange={handlePositionChange} position={position} />

        <h3 className='register-form_title'>Photo</h3>
        <div className='register-form_file'>
          <label
            htmlFor='file'
            className={
              fileValid
                ? 'register-form_file-label'
                : 'register-form_file-labelWrong'
            }
          >
            {(file && file.name) || 'Upload your photo'}
          </label>
          <input
            onChange={handleFileChange}
            type='file'
            name='file'
            id='file'
            className='register-form_file-input'
          ></input>
          {!fileValid && (
            <p className='register-form_error'>
              Upload jpg/jpeg images only; at least 70x70px; size must not
              exceed 5MB
            </p>
          )}
        </div>

        <div className='register-form_btn'>
          <PrimaryBtn name='Sing up now' type='submit' />
        </div>
      </form>
    </section>
  );
};

const mapStateToProps = ({ user }) => ({
  token: user.token,
});

export default connect(mapStateToProps, {
  fetchToken,
  refreshUsers,
  spinnerON,
  spinnerOFF,
  openModal
})(RegisterForm);
