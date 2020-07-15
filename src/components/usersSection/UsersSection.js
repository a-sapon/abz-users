import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../redux/operations';
import { connect } from 'react-redux';
import PrimaryBtn from '../primaryBtn/PrimaryBtn';
import ReactTooltip from 'react-tooltip';
import './usersSection.scss';
import '../app.scss';

const UsersSection = ({ fetchUsers, users, error, url_obj }) => {
  useEffect(() => {
    fetchUsers(
      'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6'
    );
  }, [fetchUsers]);

  const [imageLoadError, setImageLoadError] = useState(true);

  const handleMoreClick = () => {
    if (url_obj !== null && url_obj.next_url) {
      fetchUsers(url_obj.next_url);
      window.scrollTo({
        top: document.documentElement.scrollHeight - 1000,
        behavior: 'smooth',
      });
    }
  };

  const [hint, showHint] = useState(false);

  const hover = (e) => {
    if (e.target.scrollWidth > 200) {
      e.target.style.cursor = 'pointer';
      showHint(true);
    }
  };

  const unHover = (e) => {
    showHint(false);
  };

  return (
    <section className='users'>
      <div className='container'>
        <h2 className='users-title'>Our cheerful users</h2>
        <p className='users-text'>
          Attention! Sorting users by registration date
        </p>
        <ul className='users-list container'>
          {users.length !== 0 &&
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
                <p
                  data-tip={user.email}
                  onMouseOver={hover}
                  onMouseOut={unHover}
                  className='users-list_item-info'
                >
                  {user.email}
                </p>
                {hint && <ReactTooltip place='bottom' />}
                <p className='users-list_item-info'>{user.phone}</p>
              </li>
            ))}
        </ul>
        {error !== null && <h3>{error}</h3>}
        {error === null && url_obj !== null && url_obj.next_url !== null && (
          <PrimaryBtn name='Show more' onHandleClick={handleMoreClick} />
        )}
      </div>
    </section>
  );
};

const mapStateToProps = ({ user }) => ({
  users: user.users,
  error: user.usersError,
  url_obj: user.url_obj,
});

export default connect(mapStateToProps, { fetchUsers })(UsersSection);
