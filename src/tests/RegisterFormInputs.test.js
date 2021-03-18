import React from 'react';
import ReactDOM from 'react-dom';
import RegisterFormInputs from '../components/RegisterFormInputs';

describe('RegisterFormInputs component', () => {

	it('renders without crashing', () => {
		const div = document.createElement('div');

		ReactDOM.render(
			<RegisterFormInputs/>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});

});