// @ts-nocheck
// * Альтернативная запись
// function CarInfo(props) {
// 	const { car, status, isOwner } = props
// 	const text = isOwner ? `This ${car} is ${status}` : "I don't have a car"
// 	return <h1>{text}</h1>
// }
function CarInfo({ car, status, isOwner }) {
	return isOwner ? (
		<h1>
			This {car} is {status}
		</h1>
	) : (
		<h2>I don't have a car</h2>
	)
}

export default CarInfo
