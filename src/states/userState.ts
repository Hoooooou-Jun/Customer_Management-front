import { userInfoType } from '../types/userActionType'

export interface IuserState {
	success: boolean
	userInfo?: userInfoType // ?를 붙이면 null(undefined)로 반환.
}

export const userState: IuserState = {
	success: false
}