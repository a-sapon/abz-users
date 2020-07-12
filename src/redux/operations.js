import axios from 'axios';
import { getUsers, getUsersError, setUrlObject } from './actionCreators';

export const fetchUsers = (url) => async (dispatch) => {
  try {
    const response = await axios.get(url);
    const sortedUsers = response.data.users.sort(
      (a, b) => b.registration_timestamp - a.registration_timestamp
    );
    dispatch(getUsers(sortedUsers));
    dispatch(setUrlObject(response.data.links));
  } catch (err) {
    dispatch(getUsersError(err.message));
  }
};
