import { request } from './axios';

const requestLogin = (id: string, password: string) => {
	return request.post('/users/login', {
		"id": id,
		"password": password,
})};

const requestSignUp = (id: string, password: string) => {
	return request.post('/users/register', {
		"id": id,
		"password": password,
})};

const requestUserInfoEdit = (id: string, password: string, username: string, phone: string, region: string) => {
	return request.post('/users/userinfo', {
		"id": id,
		"password": password,
		"username": username,
		"phone": phone,
		"region": region,
})};

export {
	requestLogin,
	requestSignUp,
	requestUserInfoEdit,
};