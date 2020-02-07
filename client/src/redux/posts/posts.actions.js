import actionTypes from './posts.types';

export const fetchPostsStart = () => ({
	type: actionTypes.FETCH_POSTS_START
});

export const fetchPostsSuccess = (posts) => ({
	type: actionTypes.FETCH_POSTS_SUCCESS,
	payload: posts
});

export const fetchPostsFailure = (errorMessage) => ({
	type: actionTypes.FETCH_POSTS_FAILURE,
	payload: errorMessage
});
