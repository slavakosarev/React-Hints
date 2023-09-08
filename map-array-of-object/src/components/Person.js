// @ts-nocheck
function Person(props) {
	const { firstName, lastName, email, img } = props
	return (
		<div className="card">
			<img src={img} alt="card" />
			<h2>
				{firstName} {lastName}
			</h2>
			<h4>{email}</h4>
		</div>
	)
}

export default Person
