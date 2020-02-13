import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import postsReducer from './posts/posts.reducer';
import userReducer from './user/user.reducer';
import errorReducer from './error/error.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: []
};

const rootReducers = combineReducers({
	user: userReducer,
	posts: postsReducer,
	errors: errorReducer
});

export default persistReducer(persistConfig, rootReducers);
