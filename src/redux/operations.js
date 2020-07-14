import axios from 'axios';
import {
  getUsers,
  getUsersError,
  setUrlObject,
  getPositions,
  getToken,
  getUpdatedUsers
} from './actionCreators';

export const fetchUsers = (url) => async (dispatch) => {
  try {
    const response = await axios.get(url);
    if (response.data.success) {
      const sortedUsers = response.data.users.sort(
        (a, b) => b.registration_timestamp - a.registration_timestamp
      );
      dispatch(getUsers(sortedUsers));
      dispatch(setUrlObject(response.data.links));
    } else {
      dispatch(getUsersError(response.data.message));
    }
  } catch (err) {
    dispatch(getUsersError(err.message));
  }
};

export const fetchPositions = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
    );
    if (response.data.success) {
      dispatch(getPositions(response.data.positions));
    } else {
      dispatch(getPositions(response.data.message));
    }
  } catch (err) {
    dispatch(getPositions(err.message));
  }
};

export const fetchToken = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'https://frontend-test-assignment-api.abz.agency/api/v1/token'
    );
    dispatch(getToken(response.data.token));
  } catch (err) {
    dispatch(getToken(err.message));
  }
};

export const refreshUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6'
    );
    if (response.data.success) {
      const sortedUsers = response.data.users.sort(
        (a, b) => b.registration_timestamp - a.registration_timestamp
      );
      dispatch(getUpdatedUsers(sortedUsers));
      dispatch(setUrlObject(response.data.links));
    } else {
      dispatch(getUsersError(response.data.message));
    }
  } catch (err) {
    dispatch(getUsersError(err.message));
  }
};
