// @ts-nocheck
import { useState } from 'react'
import User from './components/User'
import ChangeUser from './components/ChangeUser'
import UserContext from './context/UserContext'
import './App.css'

function App() {
	const [user, setUser] = useState('Slava')
	return (
		//* передаём объект {user: user, setUser: setUser}, используя короткую запись
		<UserContext.Provider value={{ user, setUser }}>
			<div className="App">
				<User />
				<ChangeUser />
			</div>
		</UserContext.Provider>
	)
}

export default App
