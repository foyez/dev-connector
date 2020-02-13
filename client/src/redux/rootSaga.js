import { all, call } from 'redux-saga/effects';
import { postsSaga } from './posts/posts.sagas';
import { userSaga } from './user/user.sagas';

export default function* rootSaga() {
	yield all([ call(postsSaga), call(userSaga) ]);
}
