import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import ThemeContext from './ThemeContext';

export default function LoginLinks(props) {

	const context = useContext(ThemeContext);
	const navLinkStyle = context.navLinkStyle;
	const routeName = props.routeName;
	const routePath = props.routePath;

	return (
		<li>
			<Link
				style={navLinkStyle}
				to={routePath}>
				{routeName}
			</Link>
			<hr/>
		</li>
	);
}

