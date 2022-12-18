import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
	return (
		<nav>
			<ul>
				{routes.map(route => (
					<li key={route.to}>
						<NavLink 
						to={route.to}
						style={({ isActive }) => ({color: isActive ? "green": "blue" })}
						key={route.to}
						>{route.text}</NavLink>
					</li>
				))}
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
routes.push({
	to: "/login",
	text: "login",
})
routes.push({
	to: "/logout",
	text: "logout",
})

export {Menu};