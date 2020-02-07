import React from 'react';

import Spinner from '../UI/Spinner/Spinner';

const WithSpinner = (WrapperComponent) => ({ isLoading, ...rest }) => {
	return isLoading ? <Spinner /> : <WrapperComponent {...rest} />;
};

export default WithSpinner;
