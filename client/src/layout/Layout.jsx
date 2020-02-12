import React, { Fragment } from 'react';

import Navbar from '../components/navbar/navbar.component';
import Footer from '../components/Footer/Footer';

import classes from './Layout.module.scss';

const Layout = ({ children }) => {
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

export default Layout;
