// @ts-nocheck
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import styles from './TodosActions.module.css'
import Button from '../UI/Button'

function TodosActons({
	resetTodos,
	deleteCompletedTodos,
	completedTodosExist,
}) {
	return (
		<div className={styles.todosActionsContainer}>
			<Button
				title="Reset Todos"
				onClick={resetTodos}>
				<RiDeleteBin2Line />
			</Button>
			<Button
				title="Clear Completed Todos"
				onClick={deleteCompletedTodos}
				disabled={!completedTodosExist}>
				<RiRefreshLine />
			</Button>
		</div>
	)
}

export default TodosActons
