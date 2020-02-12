import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			errors: {}
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		console.log(this.state);
	};

	render() {
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
										className="form-control form-control-lg"
										placeholder="Email Address"
										name="email"
										value={this.state.email}
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										className="form-control form-control-lg"
										placeholder="Password"
										name="password"
										value={this.state.password}
										onChange={this.handleChange}
									/>
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

export default Login;
