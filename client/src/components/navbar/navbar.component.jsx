import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

const Navbar = ({ signOutStart, currentUser }) => {
	const authLinks = (
		<ul className="navbar-nav ml-auto">
			<li className="nav-item">
				<a href="#" onClick={() => signOutStart()} className="nav-link">
					<img
						className="rounded-circle"
						style={{ width: '25px', marginRight: '5px' }}
						src={currentUser && currentUser.avatar}
						alt={currentUser && currentUser.name}
					/>
					Log out
				</a>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul className="navbar-nav ml-auto">
			<li className="nav-item">
				<NavLink className="nav-link" to="/register">
					Sign Up
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" to="/login">
					Login
				</NavLink>
			</li>
		</ul>
	);

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
			<div className="container">
				<Link className="navbar-brand" to="/">
					DevConnector
				</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="mobile-nav">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink className="nav-link" to="/profiles">
								{' '}
								Developers
							</NavLink>
						</li>
					</ul>

					{currentUser ? authLinks : guestLinks}
				</div>
			</div>
		</nav>
	);
};

Navbar.prototype = {
	signOutStart: PropTypes.func.isRequired,
	currentUser: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps, { signOutStart })(Navbar);
