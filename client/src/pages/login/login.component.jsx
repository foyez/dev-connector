import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectErrors } from '../../redux/error/error.selectors';
import { signInStart } from '../../redux/user/user.actions';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			errors: {}
		};
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.errors !== prevState.errors) {
			return { errors: nextProps.errors };
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { email, password } = this.state;
		this.props.signInStart({ email, password });
	};

	render() {
		const { errors } = this.state;

		return (
			<div className="login">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Log In</h1>
							<p className="lead text-center">Sign in to your DevConnector account</p>
							<form noValidate onSubmit={this.handleSubmit}>
								<div className="form-group">
									<input
										type="email"
										className={classnames('form-control form-control-lg', {
											'is-invalid': errors.email
										})}
										placeholder="Email Address"
										name="email"
										value={this.state.email}
										onChange={this.handleChange}
									/>
									{errors.email && <div className="invalid-feedback">{errors.email}</div>}
								</div>
								<div className="form-group">
									<input
										type="password"
										className={classnames('form-control form-control-lg', {
											'is-invalid': errors.password
										})}
										placeholder="Password"
										name="password"
										value={this.state.password}
										onChange={this.handleChange}
									/>
									{errors.password && <div className="invalid-feedback">{errors.password}</div>}
								</div>
								<input type="submit" className="btn btn-info btn-block mt-4" />
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	signInStart: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
	errors: selectErrors
});

export default connect(mapStateToProps, { signInStart })(Login);
