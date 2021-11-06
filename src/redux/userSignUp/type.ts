export const USERSIGNUP_SUCCESS = 'USERSIGNUP_SUCCESS';
export const USERSIGNUP_FAILURE = 'USERSIGNUP_FAILURE';

export type userSignUpDispatchType = userSignUpSuccessDispatch | userSignUpFailureDispatch;

export interface userSignUpSuccessDispatch {
	type: typeof USERSIGNUP_SUCCESS
	payload: string
};

export interface userSignUpFailureDispatch {
	type: typeof USERSIGNUP_FAILURE
	payload: string
};