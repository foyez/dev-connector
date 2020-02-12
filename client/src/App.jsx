import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './layout/Layout';
import HomePage from './pages/home/home.component';

import Spinner from './components/UI/Spinner/Spinner';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const NotFound = lazy(() => import('./components/404/404'));

const App = () => {
	const routes = (
		<ErrorBoundary>
			<Switch>
				<Route path="/" exact component={HomePage} />

				<Suspense fallback={<Spinner />}>
					<Route path="*" component={NotFound} />
				</Suspense>
				<Redirect to="/" />
			</Switch>
		</ErrorBoundary>
	);

	return <Layout>{routes}</Layout>;
};

export default App;
