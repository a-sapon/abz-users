import React from 'react';
import { closeModal } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import './modal.scss';

const Modal = ({ response, closeModal }) => {
  const hideModal = (e) => {
    if (
      e.target === e.currentTarget ||
      e.target.dataset.action === 'close-modal'
    ) {
      closeModal();
    }
  };

  return (
    <div onClick={hideModal} className='overlay'>
      <div className='overlay-modal'>
        <h3 className='overlay-modal_title'>
          {response.success ? 'Success!' : 'Error!'}
        </h3>
        <div className='overlay-modal_response'>{response.message}</div>
        <button data-action='close-modal' className='overlay-modal_btn'>
          Great
        </button>

        <span data-action='close-modal' className='overlay-modal_closeBtn'>
          <svg data-action='close-modal' width='12px' height='12px'>
            <path
              data-action='close-modal'
              fill-rule='evenodd'
              d='M11.998,9.899 L9.899,11.998 L6.000,8.099 L2.101,11.998 L0.002,9.899 L3.901,6.000 L0.002,2.101 L2.101,0.002 L6.000,3.901 L9.899,0.002 L11.998,2.101 L8.099,6.000 L11.998,9.899 Z'
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default connect(null, { closeModal })(Modal);
