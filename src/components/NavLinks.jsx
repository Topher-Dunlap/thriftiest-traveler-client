import React from 'react';
import {Link} from 'react-router-dom';

export default function NavLinks(props) {

    ///props
    const routeName = props.routeName;
    const routePath = props.routePath;

    return (
        <li>
            <Link
                style={linkStyle}
                to={routePath}>
                {routeName}
            </Link>
            <hr/>
        </li>
    )
}

const linkStyle = {
    color: "white",
    textDecoration: "none",
}