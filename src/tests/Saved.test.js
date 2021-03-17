import React from 'react';
import ReactDOM from 'react-dom';
import SavedResults from '../components/SavedResult';

describe(`Saved component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <SavedResults/>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})