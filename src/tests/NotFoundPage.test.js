import React from 'react';
import ReactDOM from 'react-dom';
import NotFoundPage from '../components/NotFoundPage';

describe(`NotFoundPage component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <NotFoundPage/>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})