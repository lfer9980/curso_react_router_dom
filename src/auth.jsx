import React, { createContext, useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);

	const login = ({ username }) => {
		setUser({ username });
		navigate('./profile');
	};

	const logout = () => {
		setUser(null);
		navigate('./');
	};

	const auth = { user, login, logout };
	return (
		<AuthContext.Provider value={auth}>
		  {children}
		</AuthContext.Provider>
	  );
}

function useAuth() {
	const auth = useContext(AuthContext);
	return auth;
}

function AuthRoute({ children }) {
	const auth = useAuth();

	if( !auth.user ) {
		return <Navigate to="/login"/>;
	}

	return children;
}


/* el componente se escribe con minusculas por que exportaremos varias cosas */
export {
	AuthProvider,
	useAuth,
	AuthRoute,
};