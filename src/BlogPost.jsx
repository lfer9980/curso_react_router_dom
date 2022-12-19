import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from './blogdata';
import { useAuth } from './auth';

function BlogPost() {
	
	const navigate = useNavigate();

	/* con este hook de rrd, traemos los parametros contenidos en la URI */
	const { slug } = useParams();

	const auth = useAuth();
	const blogpost = blogdata.find(post => post.slug === slug);

	const deletePost = auth.user?.isAdmin || blogpost.author === auth.user?.username;

	const returnToBlog = () => {
		/* -1 equivalente a volver a atrás en el historial */
		navigate(-1);
	};

	return(
		<>	
			<h2>{blogpost.title}</h2>
			<button onClick={returnToBlog}>volver al blog</button>
			<span>{blogpost.author}</span>
			<p>{blogpost.content}</p>

			{deletePost && (
				<button>Eliminar blogpost</button>
			)}
		</>
	);
}

export {BlogPost} ;