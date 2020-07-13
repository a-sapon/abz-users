import axios from 'axios';
import {
  getUsers,
  getUsersError,
  setUrlObject,
  getPositions,
  getToken,
} from './actionCreators';

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

export const fetchPositions = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
    );
    dispatch(getPositions(response.data.positions));
  } catch (err) {
    console.log(err.message)
  }
};

export const fetchToken = () => async (dispatch) => {
  try {
    const response = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token');
    dispatch(getToken(response.data.token));
  } catch (err) {
    dispatch(getToken(err.message));
  }
}