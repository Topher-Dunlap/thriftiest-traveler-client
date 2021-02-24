import React from 'react';
import NavLinks from "./NavLinks";
import 'reactjs-popup/dist/index.css';
// import LoginLinks from "./LoginLinks";
// import TokenService from '../service/token-service';
// import AuthContext from '../components/AuthContext';


export default function NavBar() {

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
                </ul>
            <h1 style={headerStyle}>Thriftiest Traveler</h1>
        </div>
    )
}

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
        routeName: "Login",
        routePath: "/login"
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