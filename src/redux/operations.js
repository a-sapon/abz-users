import axios from 'axios';
import { getUsers, getUsersError } from './actionCreators';

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6'
    );
    const sortedUsers = response.data.users.sort(
      (a, b) => b.registration_timestamp - a.registration_timestamp
    );
    console.log(response.data.links) // next_url
    dispatch(getUsers(sortedUsers));
  } catch (err) {
    dispatch(getUsersError(err.message));
  }
};
