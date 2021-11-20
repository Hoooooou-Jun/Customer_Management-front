import { initialState } from './state';
import { USERINFOEDIT_FAILURE, USERINFOEDIT_SUCCESS } from './type';

const userInfoEditReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case USERINFOEDIT_SUCCESS: {
			return {
				...state,
				message: action.payload
			}
		}
		case USERINFOEDIT_FAILURE: {
			return {
				...state,
				message: action.payload
			}
		}
		default:
			return state;
	}
};

export default userInfoEditReducer;