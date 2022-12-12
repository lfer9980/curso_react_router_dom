import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
	return (
		<nav>
			<ul>
				{routes.map(route => (
					<li>
						<NavLink 
						to={route.to}
						style={({ isActive }) => ({color: isActive ? "green": "blue" })}
						end
						>{route.text}</NavLink>
					</li>
				))}

{/* 				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/Blog">Blog</Link>
				</li>
				<li>
					<Link to="/Profile">Profile</Link>
				</li> */}
{/* 				<li>
					<NavLink 
					style={({ isActive }) => ({color: isActive ? "green": "blue" })}
					to="/"
					>Home</NavLink>
				</li>
				<li>
					<NavLink to="/Blog"
					style={({ isActive }) => ({color: isActive ? "green": "blue" })}
					>Blog</NavLink>
				</li>
				<li>
					<NavLink to="/profile"
					style={({ isActive }) => ({color: isActive ? "green": "blue" })}
					>Profile</NavLink>
				</li> */}
			</ul>
		</nav>
	);
}


const routes = [];
routes.push({
	to: "/",
	text: "Home",
})

routes.push({
	to: "/blog",
	text: "Blog",
})

routes.push({
	to: "/profile",
	text: "Profile",
})

export {Menu};