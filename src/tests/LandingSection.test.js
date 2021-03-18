import React from 'react';
import ReactDOM from 'react-dom';
import LandingSection from '../components/LandingSection';

describe('LandingSection component', () => {

	it('renders without crashing', () => {
		const div = document.createElement('div');

		ReactDOM.render(
			<LandingSection/>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});

});