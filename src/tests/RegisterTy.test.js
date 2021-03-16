import React from 'react';
import ReactDOM from 'react-dom';
import RegisterTy from '../components/RegisterTy';

describe(`RegisterForm component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <RegisterTy/>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})