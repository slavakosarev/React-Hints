// @ts-nocheck
import { useState } from 'react'

function Login() {
	const [data, setData] = useState({ username: '', password: '' })

	function handelFormSubmint(event) {
		event.preventDefault()
		// console.log(data)
		alert(JSON.stringify(data))
	}

	function handleInputChange(value, name) {
		setData({ ...data, [name]: value })
	}
	return (
		<>
			<h1>Login form</h1>
			<form onSubmit={handelFormSubmint}>
				<label>
					UserName:
					<input
						type="text"
						value={data.username}
						onChange={(e) => handleInputChange(e.target.value, 'username')}
					/>
				</label>
				<label>
					Password:
					<input
						type="password"
						value={data.password}
						onChange={(e) => handleInputChange(e.target.value, 'password')}
					/>
				</label>
				<button type="submit">Login</button>
			</form>
		</>
	)
}

export default Login
