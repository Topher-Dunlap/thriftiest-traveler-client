import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import ThemeContext from "./ThemeContext";

export default function LoginLinks(props) {

    const context = useContext(ThemeContext);
    const fontColor = context.fontColor;
    const routeName = props.routeName;
    const routePath = props.routePath;

    return (
        <li>
            <Link
                style={fontColor}
                to={routePath}>
                {routeName}
            </Link>
            <hr/>
        </li>
    )
}

