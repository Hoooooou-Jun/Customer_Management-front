import { requestLogin } from '../../utils/request';
import { Dispatch } from 'redux'
import { userLoginDispatchType, USERLOGIN_SUCCESS, USERLOGIN_FAILURE, USERLOGIN_RESET } from './type';

export const fetchUserLogin = (id: string, password: string) => async (dispatch: Dispatch<userLoginDispatchType>) => {
    requestLogin(id, password).then((response) => {
        dispatch({
            type: USERLOGIN_SUCCESS,
            payload: response.data
        });
    }).catch((error) => {
        dispatch({
            type: USERLOGIN_FAILURE,
            payload: error.response.data
        });
    });
};

export const fetchUserLoginReset = () => (dispatch: Dispatch) => {
    dispatch({
        type: USERLOGIN_RESET,
    })
}