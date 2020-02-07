import actionTypes from './posts.types';

const initialState = {
	postList: [],
	isFetching: false,
	errorMessage: null
};

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_POSTS_START:
			return {
				...state,
				isFetching: true
			};
		case actionTypes.FETCH_POSTS_SUCCESS:
			return {
				...state,
				isFetching: false,
				postList: action.payload
			};
		case actionTypes.FETCH_POSTS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			};
		default:
			return state;
	}
};

export default postsReducer;
