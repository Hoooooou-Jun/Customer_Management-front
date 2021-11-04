import { userState } from '../states/userState';
import { USERLOGIN_FAILURE, USERLOGIN_SUCCESS } from '../types/userActionType';

const userReducer = (state = userState, action: any) => {
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
			return { // ...state를 넣으면 로그인 성공 후 실패하면 초기값이 리셋되지 않음.
				message: action.payload.message 
			}
		}
		default:
			return state;
	}
}

export default userReducer;