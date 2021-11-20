export const USERINFOEDIT_SUCCESS = 'USERINFOEDIT_SUCCESS';
export const USERINFOEDIT_FAILURE = 'USERINFOEDIT_FAILURE';

export type userInfoEditDispatchType = userInfoEditSuccessDispatch | userInfoEditFailureDispatch;

export interface userInfoEditSuccessDispatch {
	type: typeof USERINFOEDIT_SUCCESS
	payload: string
};

export interface userInfoEditFailureDispatch {
	type: typeof USERINFOEDIT_FAILURE
	payload: string
};