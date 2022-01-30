import { combineReducers } from 'redux';
import userLoginReducer from './userLogin/reducer';
import userSignUpReducer from './userSignUp/reducer';
import userInfoEditReducer from './userInfoEdit/reducer';

const rootReducer = combineReducers({
    userLoginReducer,
    userSignUpReducer,
    userInfoEditReducer,
});

export default rootReducer;