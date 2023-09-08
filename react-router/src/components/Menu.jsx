// @ts-nocheck
import { NavLink } from 'react-router-dom'

const Menu = () => {
	return (
		<nav>
			<NavLink
				className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
				to="."
				end>
				Home
			</NavLink>
			<NavLink to="courses">Courses</NavLink>
			<NavLink
				style={({ isActive }) =>
					isActive ? { color: 'rgb(240 240 31)', textDecoration: 'none' } : {}
				}
				to="about">
				About
			</NavLink>
			<NavLink to="contacts">Contacts</NavLink>
		</nav>
	)
}

export default Menu
