import { userType } from '../types';

export const USERLOGIN_SUCCESS = 'USERLOGIN_SUCCESS';
export const USERLOGIN_FAILURE = 'USERLOGIN_FAILURE';

export type userLoginDispatchType = userLoginSuccessDispatch | userLoginFailureDispatch;

export interface userLoginSuccessDispatch {
	type: typeof USERLOGIN_SUCCESS
	payload: {
		message: string
		token: string
		userInfo: userType
	}
};

export interface userLoginFailureDispatch {
	type: typeof USERLOGIN_FAILURE
	payload: {
		message: string
	}
};