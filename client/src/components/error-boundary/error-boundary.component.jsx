import React from 'react';

import { ErrorOverlay, ErrorImage, ErrorText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
	constructor() {
		super();

		this.state = {
			hasError: false
		};
	}

	static getDerivedStateFromError(error) {
		// process the error
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasError) {
			return (
				<ErrorOverlay>
					<ErrorImage imageUrl="https://i.imgur.com/yW2W9SC.png" />
					<ErrorText>Sorry this page is broken</ErrorText>
				</ErrorOverlay>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
