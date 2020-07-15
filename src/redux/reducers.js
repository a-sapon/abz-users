import Type from './types';

const INIT_STATE = {
  users: [],
  usersError: null,
  url_obj: null,
  positions: [],
  token: null,
};

export const userReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case Type.GET_USERS:
      return { ...state, users: [...state.users, ...payload] };

    case Type.GET_USERS_ERROR:
      return { ...state, usersError: payload };

    case Type.SET_URL_OBJECT:
      return { ...state, url_obj: payload };

    case Type.GET_POSITIONS:
      return { ...state, positions: payload };

    case Type.GET_TOKEN:
      return { ...state, token: payload };

    case Type.REFRESH_USERS:
      return { ...state, users: payload };

    default:
      return state;
  }
};

export const spinnerReducer = (state = false, { type }) => {
  switch (type) {
    case Type.SPINNER_ON: return true;
    case Type.SPINNER_OFF: return false;
    default: return state;
  }
};

export const modalReducer = (state = { open: false, response: null }, {type, payload}) => {
  switch (type) {
    case Type.OPEN_MODAL:
      return { open: true, response: payload };

    case Type.CLOSE_MODAL:
      return { ...state, open: false };

    default: return state;
  }
};

export const mobileMenuReducer = (state = false, {type}) => {
  switch (type) {
    case Type.OPEN_MOBILE_MENU: return true;
    case Type.CLOSE_MOBILE_MENU: return false;
    default: return state;
  }
}