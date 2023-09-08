// @ts-nocheck
import './Post.css'
function Post(props) {
	const { id, title, body, userId } = props
	return (
		<div className="post">
			<small>{id}</small>
			<h3>{title}</h3>
			<p>{body}</p>
			<h5>USER ID: {userId}</h5>
		</div>
	)
}

export default Post
