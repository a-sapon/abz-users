import Type from './types';

const INIT_STATE = {
  users: [],
  error: null,
  next_url: '',
  prev_url: ''
}

export const userReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case Type.GET_USERS:
      return {...state, users: payload};

    case Type.GET_USERS_ERROR:
      return {...state, error: payload};

    default:
      return state;
  }
}