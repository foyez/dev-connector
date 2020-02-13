import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import UserActionTypes from './user.types';
import { signUpSuccess } from './user.actions';
import { getErrors } from '../error/error.actions';

export function* signUp({ payload }) {
	try {
		const res = yield call(axios.post, '/api/users/register', payload);
		yield put(signUpSuccess(res.data));
	} catch (error) {
		yield put(getErrors(error.response.data));
	}
}

export function* onSignUpStart() {
	yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSaga() {
	yield all([ call(onSignUpStart) ]);
}
