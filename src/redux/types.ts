import rootReducer from './rootReducer';

export type rootReducerType = ReturnType<typeof rootReducer>;

export type userType = {
	id: string
	password: string
	username: string
	phone: string
	region: string
};