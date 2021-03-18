import React from 'react';
import ReactDOM from 'react-dom';
import NavLinks from '../components/NavLinks';
import {BrowserRouter} from 'react-router-dom';

describe('NavBar component', () => {

	it('renders without crashing', () => {
		const div = document.createElement('div');

		ReactDOM.render(
			<BrowserRouter>
				<NavLinks />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});

});