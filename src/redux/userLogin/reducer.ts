import { initialState } from './state';
import { USERLOGIN_FAILURE, USERLOGIN_SUCCESS } from './type';

const userLoginReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case USERLOGIN_SUCCESS: {
			return {
				...state,
				message: action.payload.message,
				token: action.payload.token,
				user: {
					id: action.payload.user.id,
					password: action.payload.user.password,
					username: action.payload.user.username,
					phone: action.payload.user.phone,
					region: action.payload.user.region,
				}
			}
		}
		case USERLOGIN_FAILURE: {
			return {
				...state,
				message: action.payload.message,
				count: ++state.count
			}
		}
		default:
			return state;
	}
};

export default userLoginReducer;