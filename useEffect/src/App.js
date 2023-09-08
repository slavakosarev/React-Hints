// @ts-nocheck
import { useState, useEffect } from 'react'
import './App.css'

function App() {
	const [todo, setTodo] = useState(null)

	useEffect(() => {
		console.log('Callback')

		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then((response) => response.json())
			.then((json) => setTodo(json))
	}, [])
	console.log(todo)

	return <div className="App">{todo && <h1>{todo.title}</h1>}</div>
}

export default App
