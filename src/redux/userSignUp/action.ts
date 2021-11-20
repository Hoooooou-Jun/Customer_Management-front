import { requestSignUp } from '../../utils/request';
import { Dispatch } from 'redux'
import { userSignUpDispatchType, USERSIGNUP_SUCCESS, USERSIGNUP_FAILURE } from './type';

export const fetchUserSignUp = (id: string, password: string) => async (dispatch: Dispatch<userSignUpDispatchType>) => {
	requestSignUp(id, password).then((response) => {
		dispatch({
			type: USERSIGNUP_SUCCESS,
			payload: String(response.status)
		});
	}).catch((error) => {
		dispatch({
			type: USERSIGNUP_FAILURE,
			payload: error.response.data.message
		});
	});
};