import { combineReducers } from 'redux';

import postsReducer from './posts/posts.reducer';

const rootReducers = combineReducers({
  posts: postsReducer,
});

export default rootReducers;