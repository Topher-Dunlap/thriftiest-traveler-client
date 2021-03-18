import React from 'react';

const ErrorContext = React.createContext({
	loggedInUser: 'false',
	setLoggedIn: () => {}
});

export default ErrorContext;