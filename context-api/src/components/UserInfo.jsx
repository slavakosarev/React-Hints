// @ts-nocheck
import UserContext from '../context/UserContext'
import { useContext } from 'react'

//* Использование хука useContext
function UserInfo() {
	const { user } = useContext(UserContext)

	return <h1>{user}</h1>
}

//* Архаичный способ
// function UserInfo() {
//     return (
//         //* Обязательно передавать функцию, если использовать Consumer
// 		<UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
// 	)
// }

export default UserInfo
