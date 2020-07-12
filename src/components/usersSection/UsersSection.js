import React, { useEffect, useState } from 'react';
import './usersSection.scss';
import { fetchUsers } from '../../redux/operations';
import { connect } from 'react-redux';

const UsersSection = ({ fetchUsers, users, error }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const [imageLoadError, setImageLoadError] = useState(true);

  return (
    <section className='users'>
      <h2 className='users-title'>Our cheerful users</h2>
      <p className='users-text'>
        Attention! Sorting users by registration date
      </p>
      <ul className='users-list'>
        {users !== [] &&
          users.map((user) => (
            <li key={user.id} className='users-list_item'>
              <img
                src={`${user.photo}`}
                onError={(e) => {
                  if (imageLoadError) {
                    setImageLoadError(false);
                    e.target.src = require('../../assets/images/photo-cover.svg');
                  }
                }}
                alt=''
                className='users-list_item-img'
              ></img>
              <h3
                className={
                  user.name.length <= 15
                    ? 'users-list_item-name'
                    : 'users-list_item-long'
                }
              >
                {user.name}
              </h3>
              <p className='users-list_item-info'>{user.position}</p>
              <p className='users-list_item-info'>{user.email}</p>
              <p className='users-list_item-info'>{user.phone}</p>
            </li>
          ))}
      </ul>
      {error !== null && <h3>{error}</h3>}
      {error === null && (
        <button type='button' className='users-btn'>
          Show more
        </button>
      )}
    </section>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  error: state.error,
});

export default connect(mapStateToProps, { fetchUsers })(UsersSection);
