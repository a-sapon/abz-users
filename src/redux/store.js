import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer, spinnerReducer, modalReducer } from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  user: userReducer,
  spinner: spinnerReducer,
  modal: modalReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
