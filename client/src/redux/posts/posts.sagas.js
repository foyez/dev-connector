import { all, call, takeLatest, put } from 'redux-saga/effects';
import axios from '../../apis/axios-posts';

import PostsActionTypes from './posts.types';
import { fetchPostsSuccess, fetchPostsFailure } from './posts.actions';

export function* fetchPostsAsync() {
	try {
		const res = yield call(axios.get, '/posts');
		yield put(fetchPostsSuccess(res.data));
	} catch (error) {
		yield put(fetchPostsFailure(error.message));
	}
}

export function* fetchPostsStart() {
	yield takeLatest(PostsActionTypes.FETCH_POSTS_START, fetchPostsAsync);
}

export function* postsSaga() {
	yield all([ call(fetchPostsStart) ]);
}
