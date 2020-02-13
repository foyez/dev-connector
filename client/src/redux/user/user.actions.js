import UserActionTypes from './user.types';

export const signUpStart = (credentials) => ({
	type: UserActionTypes.SIGN_UP_START,
	payload: credentials
});

export const signUpSuccess = (user) => ({
	type: UserActionTypes.SIGN_UP_SUCCESS,
	payload: user
});

export const signInStart = (credentials) => ({
	type: UserActionTypes.SIGN_IN_START,
	payload: credentials
});

export const signInSuccess = (user) => ({
	type: UserActionTypes.SIGN_IN_SUCCESS,
	payload: user
});
