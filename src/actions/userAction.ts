import { requestLogin } from '../utils/request';
import { Dispatch } from 'redux'
import { userLoginDispatchType, USERLOGIN_SUCCESS, USERLOGIN_FAILURE } from '../types/userActionType';

export const fetchUserLogin = (id: string, password: string) => async (dispatch: Dispatch<userLoginDispatchType>) => {
	requestLogin(id, password).then((response) => {
		dispatch({
			type: USERLOGIN_SUCCESS,
			payload: response.data.user
		})
	}).catch((error) => {
		dispatch({
			type: USERLOGIN_FAILURE
		})
	})
}