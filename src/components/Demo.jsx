import React from 'react';

export default function Demo() {

	return (
		<section style={demoMargin}>
			<header>
				<h2 style={headerTheme}>How to Demo</h2>
			</header>
			<p style={paraMargin}>If you would like to demo this app without registration please enter the following credentials:</p>
			<ul style={listStyle}>
				<li>
                    Email: test@gmail.com
				</li>
				<li>
                    Password: P@sswordsAreCool1!
				</li>
			</ul>
		</section>
	);
}

const demoMargin = {
	margin: '4rem 4rem 6rem 4rem',
	borderRadius: '10px 10px 10px 10px / 10px 10px 10px 10px',
	borderStyle: 'solid',
	borderColor: '#333029',
	padding: '20px',
};

const paraMargin = {
	margin: '0 2rem 2rem',
	textAlign: 'center',
};

const headerTheme = {
	textAlign: 'center',
	backgroundColor: '#333029',
	color: 'white',
	margin: '0 0 2rem',
};

const listStyle = {
	margin: '0 1rem',
	padding: '0',
	listStyleType: 'none',
	fontWeight: 'bold',
	textAlign: 'center'
};
