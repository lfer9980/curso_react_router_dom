import React from "react";
import { useParams } from "react-router-dom";
import { blogdata } from './blogdata';

function BlogPost() {
	/* con este hook de rrd, traemos los parametros contenidos en la URI */
	const { slug } = useParams();

	const blogpost = blogdata.find(post => post.slug === slug);

	return(
		<>
			<h2>{blogpost.title}</h2>
			<span>{blogpost.author}</span>
			<p>{blogpost.content}</p>
		</>
	);
}

export {BlogPost} ;