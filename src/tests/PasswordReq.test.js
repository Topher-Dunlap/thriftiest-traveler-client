import React from 'react';
import ReactDOM from 'react-dom';
import PasswordReq from '../components/PasswordReq';

describe(`PasswordReq component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <PasswordReq/>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})