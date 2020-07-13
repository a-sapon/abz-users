import React, { useEffect, useState } from 'react';
import './registerForm.scss';
import '../app.scss';
import { fetchPositions } from '../../redux/operations';
import { connect } from 'react-redux';
import PrimaryBtn from '../primaryBtn/PrimaryBtn';

const RegisterForm = ({ fetchPositions, positions }) => {
  useEffect(() => {
    fetchPositions();
  }, []);

  const [info, setInfo] = useState({ name: '', email: '', phone: '' });
  const [position, setPosition] = useState('');
  const [file, setFile] = useState('Upload your photo');

  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [fileValid, setFileValid] = useState(true);

  const handleInputChange = (e) => {
    e.persist();
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRadioChange = (e) => {
    setPosition(e.target.value);
  };

  const handleFileChange = (e) => {
    console.dir(e.currentTarget);
    const re = /.*\.(jpg|jpeg)$/;
    const fileName = e.currentTarget.files[0].name.toLowerCase();
    const fileSize = e.currentTarget.files[0].size;
    if (!re.test(fileName) || fileSize > 5000000) {
      setFileValid(false);
    } else {
      setFileValid(true);
      setFile(fileName);
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
    const re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    if (!re.test(info.email)) {
      setEmailValid(false);
    } else setEmailValid(true);
  };

  const phoneValidate = () => {
    const re = /^[+][3][8][0][ -]*([0-9 -]{9,12})$/;
    if (!re.test(info.phone)) {
      setPhoneValid(false);
    } else setPhoneValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className='register container'>
      <h2 id='register' className='register-title'>
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

        <h3 className='register-form_title'>Select your position</h3>
        <ul className='register-form_list'>
          {positions !== [] &&
            positions.map(({ id, name }) => (
              <li key={id} className='register-form_list-item'>
                <input
                  onChange={handleRadioChange}
                  value={name}
                  checked={position === name}
                  type='radio'
                  name='position'
                  id={id}
                ></input>
                <label htmlFor={id} className='register-form_radioLabel'>
                  {name}
                </label>
              </li>
            ))}
        </ul>

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
            {file}
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

const mapStateToProps = (state) => ({
  positions: state.positions,
});

export default connect(mapStateToProps, { fetchPositions })(RegisterForm);
