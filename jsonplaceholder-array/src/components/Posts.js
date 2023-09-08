// @ts-nocheck
import { useState, useEffect } from 'react'
import Post from './Post'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

function Posts() {
	const [posts, setPosts] = useState([])
	const [error, setError] = useState('')
	const [isLoading, setIsloading] = useState(true)

	useEffect(() => {
		fetch(API_URL)
			.then((response) => response.json())
			.then((json) => {
				// console.log(json)
				setPosts(json)
			})
			.catch((error) => setError(error.message))
			.finally(() => setIsloading(false))
	}, [])

	if (error) {
		return <h1 style={{ marginTop: '200px' }}>ERROR🤬: {error}</h1>
	}

	return (
		<>
			<h1>Posts</h1>
			<hr />
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				posts.map((post) => (
					<Post
						key={post.id}
						{...post}
					/>
				))
			)}
		</>
	)
}

export default Posts
