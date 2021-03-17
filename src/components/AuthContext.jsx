import React from 'react';

const AuthContext = React.createContext({
    loggedInUser: "false",
    setLoggedIn: () => {}
})

export default AuthContext;