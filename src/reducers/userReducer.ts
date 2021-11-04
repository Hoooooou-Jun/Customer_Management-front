import { userState } from '../states/userState';
import { USERLOGIN_FAILURE, USERLOGIN_SUCCESS } from '../types/userActionType';

const userReducer = (state = userState, action: any) => {
	switch (action.type) {
		case USERLOGIN_SUCCESS: {
			return {
				...state,
				success: true,
				userInfo: {
					id: action.payload.id,
					password: action.payload.password,
					token: action.payload.token,
					username: action.payload.username,
					phone: action.payload.phone,
					region: action.payload.region,
				}
			}
		}
		case USERLOGIN_FAILURE: {
			return {
				...state,
				success: false,
			}
		}
		default:
			return state;
	}
}

export default userReducer;