import { userType } from '../types'

export interface IinitailState {
	message?: string
	token?: string
	userInfo?: userType // ?를 붙이면 null(undefined)로 반환.
}

export const initialState: IinitailState = {
	message: ''
}