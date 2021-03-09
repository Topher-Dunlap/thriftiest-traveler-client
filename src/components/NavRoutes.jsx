import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from '../Utils/PrivateRoute'
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";
import Deals from "./Deals";
import Saved from "./Saved";
import NotFoundPage from "./NotFoundPage";


export default function NavRoutes(props) {

    return(
        <Switch>
            <Route
                exact path="/"
                component={Landing}
            />
            <PrivateRoute
                path='/search'
                component={Deals}
            />
            <Route
                path='/login'
                component={Login}
            />
            <Route
                path='/saved'
                component={Saved}
            />
            <Route
                path='/register'
                component={Register}
            />
            <Route
                component={NotFoundPage}
            />
        </Switch>
    )
}