import React from 'react';
import ReactDOM from 'react-dom';
import NavRoutes from '../components/NavRoutes';
import {BrowserRouter} from "react-router-dom";

describe(`NavRoutes component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <NavRoutes />
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})