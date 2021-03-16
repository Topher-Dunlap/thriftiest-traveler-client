import React from 'react';
import ReactDOM from 'react-dom';
import SavedResults from '../components/SavedResults';

describe(`RegisterForm component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <SavedResults/>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})