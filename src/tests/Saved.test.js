import React from 'react';
import ReactDOM from 'react-dom';
import Saved from '../components/Saved';

describe(`Saved component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <Saved/>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})