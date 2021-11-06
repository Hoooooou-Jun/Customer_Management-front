import { combineReducers } from 'redux';
import userLoginReducer from './userLogin/reducer';
import userSignUpReducer from './userSignUp/reducer';

const rootReducer = combineReducers({
	userLoginReducer,
	userSignUpReducer,
});

export default rootReducer;