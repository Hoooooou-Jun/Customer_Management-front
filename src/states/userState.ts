import { userType } from '../types/userActionType'

export interface IuserState {
	message?: string
	token?: string
	userInfo?: userType // ?를 붙이면 null(undefined)로 반환.
}

export const userState: IuserState = {
	message: ''
}