import React from 'react';

export default function Footer() {

	return (
		<footer style={footerStyle}>
			<h4 style={footerText}>© 2021 Topher Dunlap | All Rights Reserved</h4>
		</footer>
	);
}

const footerText = {
	margin: '0',
};

const footerStyle = {
	fontSize: 'small',
	padding: '1rem 0 0',
	textAlign: 'center',
	backgroundColor: '#333029',
	clear: 'both',
	color: 'white',
	height: '30px',
	marginTop: '25%',
	position: 'fixed',
	bottom: '0',
	left: '0',
	right: '0',
};

