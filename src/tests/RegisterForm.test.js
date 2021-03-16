import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from '../components/RegisterForm';

describe(`RegisterForm component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <RegisterForm/>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})