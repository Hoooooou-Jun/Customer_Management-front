import { requestUserInfoEdit } from '../../utils/request';
import { Dispatch } from 'redux'
import { userInfoEditDispatchType, USERINFOEDIT_SUCCESS, USERINFOEDIT_FAILURE } from './type';

export const fetchUserInfoEdit = (id: string, password: string, username: string, phone: string, region: string) => async (dispatch: Dispatch<userInfoEditDispatchType>) => {
    requestUserInfoEdit(id, password, username, phone, region).then((response) => {
        dispatch({
            type: USERINFOEDIT_SUCCESS,
            payload: String(response.status)
        });
    }).catch((error) => {
        dispatch({
            type: USERINFOEDIT_FAILURE,
            payload: error.response.data.message
        });
    });
};