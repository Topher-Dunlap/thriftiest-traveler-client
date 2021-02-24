import React from 'react';
import ReactDOM from 'react-dom';
import Register from '../components/Register';

describe(`Register component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <Register/>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})