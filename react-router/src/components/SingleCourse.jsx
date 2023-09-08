// @ts-nocheck
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import courses from '../data/courses'
// import NotFound from './NotFound'

const SingleCourse = () => {
	const params = useParams()
	const navigate = useNavigate()
	const course = courses.find((course) => course.slug === params.slug)

	useEffect(() => {
		if (!course) {
			navigate('..', { relative: 'path' })
		}
	}, [course, navigate])

	// Простое решение показать страницу Not Found
	// if (!course) {
	// 	return <NotFound />
	// }

	return (
		<>
			<h1>Course Info:</h1>
			<h2>{course?.title}</h2>
			<h3>{course?.slug}</h3>
			<h3>{course?.id}</h3>
			<Link
				to=".."
				relative="path">
				All Courses
			</Link>
		</>
	)
}

export default SingleCourse
