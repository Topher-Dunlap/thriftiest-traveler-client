import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";
import LoginForm from "./LoginForm";

export default function Login() {

    const context = useContext(ThemeContext);
    const theme = context.theme;

    return (
        <section style={theme}>
            <LoginForm />
        </section>
    )
}

