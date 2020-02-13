import ErrorActionTypes from './error.types';

export const getErrors = (errors) => ({
	type: ErrorActionTypes.GET_ERRORS,
	payload: errors
});
