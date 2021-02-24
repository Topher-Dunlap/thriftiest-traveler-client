import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import ThemeContext from "./ThemeContext";
import LoginFormInput from "./LoginFormInputs";

export default function LoginForm() {

    const {register, errors} = useForm();

    ///context theme styling
    const context = useContext(ThemeContext);
    const formStyle = context.formStyle;
    const formElementSpacing = context.formElementSpacing;
    const formButtonStyle = context.formButtonStyle;
    const formInputStyle = context.formInputStyle;

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
            <form>
                <header style={headerStyle}>
                    <h1>Login</h1>
                </header>
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
                            type="password"/>
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
