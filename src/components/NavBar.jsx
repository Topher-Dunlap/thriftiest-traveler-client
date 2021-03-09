import React, {useContext, useEffect} from 'react';
import NavLinks from "./NavLinks";
import 'reactjs-popup/dist/index.css';
import {Link} from "react-router-dom";
import LoginLinks from "./LoginLinks";
import TokenService from '../service/token-service';
import AuthContext from '../components/AuthContext';
import ThemeContext from "./ThemeContext";


export default function NavBar() {

    //Context Theme
    const context = useContext(ThemeContext);
    const fontColor = context.fontColor;

    //logged in/logged out state
    const {loggedIn, setLoggedIn} = useContext(AuthContext);
    const HandleLogoutClick = () => {
        TokenService.clearAuthToken()
        setLoggedIn(TokenService.hasAuthToken())
        console.log("is user logged in? ", loggedIn)
    }

    ///renders login or logout options depending on auth token
    useEffect(() => {
            const loggedInUser = localStorage.getItem("traveler-client-auth-token");
            if (loggedInUser) {
                console.log("logging user in useEffect")
                setLoggedIn(true);
            }
        }
    );

    function RenderLogoutLink() {
        return (
            <Link
                onClick={HandleLogoutClick}
                style={fontColor}
                to='/'>
                Logout
            </Link>
        )
    }

    ///Map the login/register out links
    const loginLinks = loginLinkOptions.map((routeData, idx) =>
        <LoginLinks
            key={idx}
            routeName={routeData.routeName}
            routePath={routeData.routePath}
        />
    )

    ///Map the Nav Links with data from filterOptions
    const navRoutes = filterOptions.map((routeData, idx) =>
        <NavLinks
            key={idx}
            color="inherit"
            routeName={routeData.routeName}
            routePath={routeData.routePath}
        />
    )

    return (
        <div style={topNav}>
                <ul style={topNavLeft}>
                    {navRoutes}
                    {loggedIn ? RenderLogoutLink() : loginLinks}
                </ul>
            <h1 style={headerStyle}>Thriftiest Traveler</h1>
        </div>
    )
}

//data used to populate nav login Links
const loginLinkOptions = [
    {
        routeName: "Register",
        routePath: "/register"
    },
    {
        routeName: "Login",
        routePath: "/login"
    },
]

//data used to populate nav Links
const filterOptions = [
    {
        routeName: "About",
        routePath: "/"
    },
    {
        routeName: "Fresh Deals",
        routePath: "/deals"
    },
    {
        routeName: "Saved",
        routePath: "/saved"
    },
]

const headerStyle = {
    color: "white",
    margin: "2rem",
    textAlign: "center",
}

const topNav = {
    backgroundColor: "#f7c841",
    display: "flex",
    width: "auto%",
}

const topNavLeft = {
    margin: "0",
    listStyleType: "none",
    textAlign: "center",
    padding: "10px",
    textDecoration: "none",
    backgroundColor: "#333029",
    color: "white",
}