import React, { Fragment } from 'react';
import jwt_decode from 'jwt-decode';

import { connect } from 'react-redux';
import { signInSuccess } from '../redux/user/user.actions';

import Navbar from '../components/navbar/navbar.component';
import Footer from '../components/Footer/Footer';

import classes from './Layout.module.scss';
import setAuthToken from '../utils/set-auth-token';

const Layout = ({ children, signInSuccess }) => {
	if (localStorage.jwtToken) {
		setAuthToken(localStorage.jwtToken);
		const decodedUser = jwt_decode(localStorage.jwtToken);
		signInSuccess(decodedUser);
	}

	return (
		<Fragment>
			<main className={classes.container}>
				<Navbar />
				<div className={classes.content}>{children}</div>
				<Footer />
			</main>
		</Fragment>
	);
};

export default connect(null, { signInSuccess })(Layout);
