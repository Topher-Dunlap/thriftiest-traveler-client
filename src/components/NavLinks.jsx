import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import ThemeContext from './ThemeContext';

export default function NavLinks(props) {

	///props
	const routeName = props.routeName;
	const routePath = props.routePath;

	//Context Theme
	const context = useContext(ThemeContext);
	const navLinkStyle = context.navLinkStyle;

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