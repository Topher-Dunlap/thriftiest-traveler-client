import React from 'react';
import ReactDOM from 'react-dom';
import LoginLinks from '../components/LoginLinks';
import {BrowserRouter} from "react-router-dom";


describe(`LoginLinks component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        let routePath = "/"

        ReactDOM.render(
            <BrowserRouter>
                <LoginLinks routePath={routePath}/>
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})