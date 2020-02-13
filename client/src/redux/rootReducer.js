import { combineReducers } from 'redux';

import postsReducer from './posts/posts.reducer';
import userReducer from './user/user.reducer';
import errorReducer from './error/error.reducer';

const rootReducers = combineReducers({
	user: userReducer,
	posts: postsReducer,
	errors: errorReducer
});

export default rootReducers;
