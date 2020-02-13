import ErrorActionTypes from './error.types';

const INITIAL_STATE = {
	errors: {}
};

const errorReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ErrorActionTypes.GET_ERRORS:
			return action.payload;
		default:
			return state;
	}
};

export default errorReducer;
