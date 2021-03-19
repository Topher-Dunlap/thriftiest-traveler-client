import React from 'react';
import {Link} from 'react-router-dom';
import '../css/theme.css';

export default function LoginLinks(props) {

	const routeName = props.routeName;
	const routePath = props.routePath;

	return (
		<li>
			<Link
				className='navLinkStyle'
				to={routePath}>
				{routeName}
			</Link>
			<hr/>
		</li>
	);
}

