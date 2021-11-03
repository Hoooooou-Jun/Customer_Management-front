import { request } from './axios';

const requestLogin = (ID: string, PW: string) => {
	return request.post('/users/login', {
		"id": ID,
		"password": PW,
})};

const requestSignUp = (ID: string, PW: string) => {
	return request.post('/users/register', {
		"id": ID,
		"password": PW,
})};

export {
	requestLogin,
	requestSignUp,
};