import Type from './types';

const INIT_STATE = {
  users: [],
  error: null,
  url_obj: null,
  positions: [],
};

export const userReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case Type.GET_USERS:
      return { ...state, users: [...state.users, ...payload] };

    case Type.GET_USERS_ERROR:
      return { ...state, error: payload };

    case Type.SET_URL_OBJECT:
      return { ...state, url_obj: payload };

    case Type.GET_POSITIONS:
      return { ...state, positions: payload };

    default:
      return state;
  }
};
