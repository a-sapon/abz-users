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
        <div
          className={
            response.success
              ? 'overlay-modal_responseOk'
              : 'overlay-modal_responseError'
          }
        >
          {response.message}
        </div>

        <span data-action='close-modal' className='overlay-modal_closeBtn'>
          <svg
            data-action='close-modal'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path
              data-action='close-modal'
              d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z'
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default connect(null, { closeModal })(Modal);
