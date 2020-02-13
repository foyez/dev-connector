import UserActionTypes from './user.types';

export const signUpStart = (credentials) => ({
	type: UserActionTypes.SIGN_UP_START,
	payload: credentials
});

export const signUpSuccess = (user) => ({
	type: UserActionTypes.SIGN_UP_SUCCESS,
	payload: user
});
