export const USERLOGIN_SUCCESS = 'USERLOGIN_SUCCESS';
export const USERLOGIN_FAILURE = 'USERLOGIN_FAILURE';

export type userInfoType = {
	id: string
	password: string
	token: string
	username: string
	phone: string
	region: string
}

export type userLoginDispatchType = userLoginSuccessDispatch | userLoginFailureDispatch

export interface userLoginSuccessDispatch {
	type: typeof USERLOGIN_SUCCESS
	payload: {
		userInfo: userInfoType
	}
};

export interface userLoginFailureDispatch {
	type: typeof USERLOGIN_FAILURE
};

