import { handleActions } from 'redux-actions';
import { LOGIN } from '../constants/action-types';

var loginReducers = handleActions({
  [LOGIN.PENDING]: (state, action) => {
    return {
      ...state,
      isLoginProgess: true
    };
  },
  [LOGIN.SUCCESS]: (state, action) => {
    return {
      ...state,
      isLoginProgess: false,
      isLoggedIn: true
    };
  },
  [LOGIN.ERROR]: (state, action) => {
    return {
      ...state,
      isLoginProgess: false,
    };
  }
}, {
    isLoginProgess: false,
    isLoggedIn: false,
  });

export {
  loginReducers
}
