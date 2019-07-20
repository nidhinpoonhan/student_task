
import { combineReducers } from 'redux';
import { loginReducers } from './login-reducer';
import { studentReducer } from './student-reducer';

const rootReducer = combineReducers({
  loginReducers,
  studentReducer
});

export {
  rootReducer
}
