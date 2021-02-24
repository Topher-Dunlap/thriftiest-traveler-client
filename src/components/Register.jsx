import React, {useContext} from 'react';
import RegisterFormInput from "./RegisterFormInputs";
import ThemeContext from "./ThemeContext";

export default function Register() {

    const context = useContext(ThemeContext);
    const formStyle = context.formStyle;
    const formButtonStyle = context.formButtonStyle;
    const centerText = context.centerText;

    const mapFormInputs = formOptions.map((option, idx) =>
        <RegisterFormInput
            key={idx}
            fieldLabel={option.fieldLabel}
            inputName={option.inputName}
            type={option.type}
        />
    )

    return (
        <div style={formStyle}>
            <form>
                <div style={centerText}>
                    <header>
                        <h2>Register</h2>
                    </header>
                    <section style={margin}>
                        <header>
                            <h3>See the Craziest Deals Today!</h3>
                        </header>
                    </section>
                </div>
                {mapFormInputs}
                <button
                    style={formButtonStyle}
                    type='submit'>
                    Sign Up
                </button>
            </form>
        </div>
    )
}


const margin = {
    margin: "0rem 2rem"
}

const formOptions = [
    {
        fieldLabel: "First name",
        inputName: "first_name",
        type: "text",
    },
    {
        fieldLabel: "Last name",
        inputName: "last_name",
        type: "text",
    },
    {
        fieldLabel: "Email",
        inputName: "email",
        type: "text",
    },
    {
        fieldLabel: "Password",
        inputName: "password",
        type: "password",
    },
]
