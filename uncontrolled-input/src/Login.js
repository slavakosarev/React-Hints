// @ts-nocheck
function Login() {
	function handelFormSubmint(event) {
		event.preventDefault()
		const userData = {
			username: event.target.username,
			password: event.target.password.value,
		}
		console.log(userData)

		alert(JSON.stringify(userData))
	}
	return (
		<>
			<h1>Login form</h1>
			<form onSubmit={handelFormSubmint}>
				<label>
					UserName:
					<input
						type="text"
						name="username"
					/>
				</label>
				<label>
					Password:
					<input
						type="text"
						name="password"
					/>
				</label>
				<button type="submit">Login</button>
			</form>
		</>
	)
}

export default Login
