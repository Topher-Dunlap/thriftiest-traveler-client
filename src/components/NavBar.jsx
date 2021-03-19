import React, {useContext, useEffect} from 'react';
import NavLinks from './NavLinks';
import 'reactjs-popup/dist/index.css';
import {Link} from 'react-router-dom';
import LoginLinks from './LoginLinks';
import TokenService from '../service/token-service';
import UserIdService from '../service/userId-token';
import AuthContext from '../components/AuthContext';
import '../css/navBar.css';
import '../css/theme.css';


export default function NavBar() {

    //logged in/logged out state
    const {loggedIn, setLoggedIn} = useContext(AuthContext);
    const HandleLogoutClick = () => {
        TokenService.clearAuthToken();
        UserIdService.clearIdToken();
        setLoggedIn(TokenService.hasAuthToken());
    };

    ///renders login or logout options depending on auth token
    useEffect(() => {
            const loggedInUser = localStorage.getItem('traveler-client-auth-token');
            if (loggedInUser) {
                setLoggedIn(true);
            }
        }
    );

    function RenderLogoutLink(loggedInLinks) {
        return (
            <ul className='ulStyle'>
                {loggedInLinks}
                <Link
                    onClick={HandleLogoutClick}
                    className='navLinkStyle'
                    to='/'
                >
                    Logout
                </Link>
            </ul>
        );
    }

    ///Map the login/register out links
    const loginLinks = loginLinkOptions.map((routeData, idx) =>
        <LoginLinks
            key={idx}
            routeName={routeData.routeName}
            routePath={routeData.routePath}
        />
    );

    ///Map the Nav Links with data from loggedInLinks
    const loggedInLinks = loggedInLinkOptions.map((routeData, idx) =>
        <NavLinks
            key={idx}
            color="inherit"
            routeName={routeData.routeName}
            routePath={routeData.routePath}
        />
    );

    ///Map the Nav Links with data from filterOptions
    const navRoutes = filterOptions.map((routeData, idx) =>
        <NavLinks
            key={idx}
            color="inherit"
            routeName={routeData.routeName}
            routePath={routeData.routePath}
        />
    );

    return (
        <div className='topNav'>
            <ul className='topNavLeft'>
                {navRoutes}
                {loggedIn ? RenderLogoutLink(loggedInLinks) : loginLinks}
            </ul>
            <h1 className='headerStyle'>Thriftiest Traveler</h1>
        </div>
    );
}

//data used to populate nav login Links
const loginLinkOptions = [
    {
        routeName: 'Register',
        routePath: '/register'
    },
    {
        routeName: 'Login',
        routePath: '/login'
    },
];

//data used to populate nav when logged in
const loggedInLinkOptions = [
    {
        routeName: 'Deals',
        routePath: '/deals'
    },
    {
        routeName: 'Saved Deals',
        routePath: '/save'
    },
];

//data used to populate nav Links
const filterOptions = [
    {
        routeName: 'About',
        routePath: '/'
    },
];
