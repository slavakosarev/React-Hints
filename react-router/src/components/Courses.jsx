// @ts-nocheck
// import SingleCourse from './SingleCourse'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import queryString from 'query-string'
import courses from '../data/courses'

const SORT_KEYS = ['title', 'slug', 'id']
function sortCourses(courses, key) {
	const sortedCourses = [...courses]
	if (!key || !SORT_KEYS.includes(key)) {
		return sortedCourses
	}
	sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
	return sortedCourses
}

const Courses = () => {
	const location = useLocation()
	const query = queryString.parse(location.search)
	// console.log(location)
	// console.log(query)
	const navigate = useNavigate()
	const [sortKey, setSortKey] = useState(query.sort)
	const [sortedCourses, setSortedCourses] = useState(
		sortCourses(courses, sortKey),
	)
	useEffect(() => {
		if (!SORT_KEYS.includes(sortKey)) {
			navigate('.')
			setSortKey()
			setSortedCourses([...courses])
		}
	}, [sortKey, navigate])
	return (
		<>
			<h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
			<br />
			{sortedCourses.map((course) => (
				<div key={course.id}>
					<Link
						to={course.slug}
						className="courseLink">
						{course.title}
					</Link>
				</div>
			))}
			{/* <SingleCourse data={{ ...courses }} /> */}
		</>
	)
}

export default Courses
