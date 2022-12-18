import React from "react";
import { useAuth } from "./auth";

function ProfilePage() {
	const auth = useAuth();

	return (
		<>
			<p>ProfilePage</p>
			<p> Hola {auth.user?.username}</p>
		</>
	);
}

export { ProfilePage };