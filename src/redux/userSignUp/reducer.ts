import { initialState } from './state';
import { USERSIGNUP_FAILURE, USERSIGNUP_SUCCESS } from './type';

const userSignUpReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case USERSIGNUP_SUCCESS: {
			return {
				...state,
				message: action.payload
			}
		}
		case USERSIGNUP_FAILURE: {
			return {
				...state,
				message: action.payload
			}
		}
		default:
			return state;
	}
};

export default userSignUpReducer;