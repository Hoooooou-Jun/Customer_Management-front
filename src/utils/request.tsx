import { request } from './axios';

const requestLogin = (ID: string, PW: string) => {
	return request.post('/users/login', {
		"username": ID,
		"password": PW,
})};

const requestSignUp = (ID: string, PW: string) => {
	return request.post('/users/register', {
		"username": ID,
		"password": PW,
})};

export {
	requestLogin,
	requestSignUp,
};