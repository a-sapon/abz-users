import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../redux/operations';
import { connect } from 'react-redux';
import PrimaryBtn from '../primaryBtn/PrimaryBtn';
import './usersSection.scss';
import '../app.scss';

const UsersSection = ({ fetchUsers, users, error, url_obj }) => {
  useEffect(() => {
    fetchUsers(
      'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6'
    );
  }, []);

  url_obj !== null && console.log('url_obj', url_obj.next_url);

  const [imageLoadError, setImageLoadError] = useState(true);

  const handleMoreClick = () => {
    console.log('click')
    if (url_obj !== null && url_obj.next_url) {
      fetchUsers(url_obj.next_url);
    }
  };

  return (
    <section className='users container'>
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
      {error === null && url_obj !== null && url_obj.next_url !== null && (
        <PrimaryBtn name='Show more' onHandleClick={handleMoreClick} />
      )}
    </section>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  error: state.error,
  url_obj: state.url_obj,
});

export default connect(mapStateToProps, { fetchUsers })(UsersSection);
