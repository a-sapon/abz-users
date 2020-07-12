import Type from './types';

export const getUsers = users => ({
  type: Type.GET_USERS,
  payload: users
})

export const getUsersError = error => ({
  type: Type.GET_USERS_ERROR,
  payload: error
})