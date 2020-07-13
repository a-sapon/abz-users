import Type from './types';

export const getUsers = (users) => ({
  type: Type.GET_USERS,
  payload: users,
});

export const getUsersError = (error) => ({
  type: Type.GET_USERS_ERROR,
  payload: error,
});

export const setUrlObject = (urlObject) => ({
  type: Type.SET_URL_OBJECT,
  payload: urlObject,
});

export const getPositions = (positions) => ({
  type: Type.GET_POSITIONS,
  payload: positions,
});

export const getToken = (token) => ({
  type: Type.GET_TOKEN,
  payload: token,
});