// @ts-nocheck
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodosActons from './components/Todos/TodosActions'
import TodoList from './components/Todos/TodoList'

function App() {
	const [todos, setTodos] = useState([])
	const addTodoHandler = (text) => {
		const newTodo = {
			text, // равносильно text: text,
			isCompleted: false,
			id: uuidv4(),
		}
		setTodos([...todos, newTodo])
	}
	const deleteTodoHandler = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id))
	}

	const toggleTodoHandler = (id) => {
		setTodos(
			todos.map((todo) => {
				return todo.id === id
					? { ...todo, isCompleted: !todo.isCompleted }
					: { ...todo }
			}),
		)
	}

	const resetTodosHandler = () => {
		setTodos([])
	}

	const deleteCompletedTodosHandler = () => {
		setTodos(todos.filter((todo) => !todo.isCompleted))
	}

	const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

	return (
		<div className="App">
			<h1>APP TODO</h1>
			<TodoForm addTodo={addTodoHandler} />
			{!!todos.length && (
				<TodosActons
					completedTodosExist={!!completedTodosCount} //* !! двойное отрицание возращает булево значение,например: не не ноль = false
					resetTodos={resetTodosHandler}
					deleteCompletedTodos={deleteCompletedTodosHandler}
				/>
			)}

			<TodoList
				todos={todos}
				deleteTodo={deleteTodoHandler}
				toggleTodo={toggleTodoHandler}
			/>
			{completedTodosCount > 0 && (
				<h2>{`You have completed ${completedTodosCount} ${
					completedTodosCount > 1 ? 'todos' : 'todo'
				}`}</h2>
			)}
		</div>
	)
}

export default App
