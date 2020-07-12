import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './reducers';
import thunk from 'redux-thunk';

export const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
