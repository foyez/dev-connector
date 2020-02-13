import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import UserActionTypes from './user.types';
import { signUpSuccess, signInSuccess } from './user.actions';
import { getErrors } from '../error/error.actions';

import setAuthToken from '../../utils/set-auth-token';

export function* signUp({ payload }) {
	try {
		const res = yield call(axios.post, '/api/users/register', payload);
		yield put(signUpSuccess(res.data));
	} catch (error) {
		yield put(getErrors(error.response.data));
	}
}

export function* signIn({ payload }) {
	try {
		const res = yield call(axios.post, '/api/users/login', payload);
		const { token } = res.data;

		// Save token to localStorage
		yield localStorage.setItem('jwtToken', token);
		setAuthToken(token);

		// Decode token to get user data
		const decodedUser = jwt_decode(token);

		yield put(signInSuccess(decodedUser));
	} catch (error) {
		yield put(getErrors(error.response.data));
	}
}

export function* onSignUpStart() {
	yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignInStart() {
	yield takeLatest(UserActionTypes.SIGN_IN_START, signIn);
}

export function* userSaga() {
	yield all([ call(onSignUpStart), call(onSignInStart) ]);
}
