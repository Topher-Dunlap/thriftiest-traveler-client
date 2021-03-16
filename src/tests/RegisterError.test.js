import React from 'react';
import ReactDOM from 'react-dom';
import RegisterError from '../components/RegisterForm';

describe(`RegisterError component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <RegisterError/>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})