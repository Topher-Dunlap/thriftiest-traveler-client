import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import LoginFormInput from "./LoginFormInputs";
import AuthService from '../service/auth-service';
import AuthContext from '../components/AuthContext';
import TokenService from "../service/token-service";
import UserIdService from "../service/userId-token"

export default function LoginForm() {

    const authLoginContext = useContext(AuthContext);
    const {register, errors} = useForm();
    const history = useHistory();
    const [errorState, setErrorState] = useState("")

    ///context theme styling
    const context = useContext(ThemeContext);
    const formStyle = context.formStyle;
    const formElementSpacing = context.formElementSpacing;
    const formButtonStyle = context.formButtonStyle;
    const formInputStyle = context.formInputStyle;

    const handleSubmitJwtAuth = (ev) => {
        ev.preventDefault()
        const {email, password} = ev.target

        AuthService.postLogin({
            email: email.value,
            password: password.value,
        })
            .then(res => {
                email.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                authLoginContext.setLoggedIn(TokenService.hasAuthToken())
                UserIdService.saveIDToken(res.user_id)
                // authLoginContext.setUserId(res.user_id)
                console.log("UserIdServiceGetIdToken: ", UserIdService.getIdToken())
                history.push("/deals")
            })
            .catch(error => {
                console.error({error})
                setErrorState(error.error)
            })
    }

    const mapFormInputs = formOptions.map((option, idx) =>
        <LoginFormInput
            key={idx}
            fieldLabel={option.fieldLabel}
            inputName={option.inputName}
            type={option.type}
        />
    )
    return (
        <div style={formStyle}>
            <form onSubmit={handleSubmitJwtAuth}>
                <header style={headerStyle}>
                    <h1>Login</h1>
                </header>
                {
                    TokenService.hasAuthToken() ?
                        <h3 style={{color: "green"}}>You're logged in!</h3> :
                        <h4 style={errorMessageStyling}>{errorState}</h4>
                }
                <div>
                    {mapFormInputs}
                    {/*////password input was manually added due to but with mapping stripping password "type"*/}
                    <div>
                        <label
                            style={formElementSpacing}>
                            Password
                        </label>
                        <input
                            ref={register({required: true, minLength: 2})}
                            style={formInputStyle}
                            name="password"
                            type="password"
                            autoComplete="on"/>
                        <br/>
                        {errors.inputName && <p style={errorMessageStyling}>This is required</p>}
                    </div>
                    <button
                        type="submit"
                        style={formButtonStyle}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

const headerStyle = {
    textAlign: "center",
}

const errorMessageStyling = {
    color: "red",
    textAlign: "center",
}

const formOptions = [
    {
        fieldLabel: "E-Mail",
        inputName: "email",
        type: "text",
    },
]
