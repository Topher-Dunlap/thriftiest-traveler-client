import React from 'react';
import ReactDOM from 'react-dom';
import Deals from '../components/Deals';

describe(`Deals component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <Deals/>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})