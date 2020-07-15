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

export const getUpdatedUsers = (users) => ({
  type: Type.REFRESH_USERS,
  payload: users,
});

export const spinnerON = () => ({
  type: Type.SPINNER_ON,
});

export const spinnerOFF = () => ({
  type: Type.SPINNER_OFF,
});

export const openModal = (response) => ({
  type: Type.OPEN_MODAL,
  payload: response,
});

export const closeModal = () => ({
  type: Type.CLOSE_MODAL,
});

export const openMobileMenu = () => ({
  type: Type.OPEN_MOBILE_MENU,
});

export const closeMobileMenu = () => ({
  type: Type.CLOSE_MOBILE_MENU,
});