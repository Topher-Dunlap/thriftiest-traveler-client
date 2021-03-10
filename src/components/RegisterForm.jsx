import React, {useContext, useState} from 'react';
import AuthApiService from '../service/auth-service'
import RegisterFormInput from "./RegisterFormInputs";
import ThemeContext from "./ThemeContext";
import RegisterError from "./RegisterError";

export default function RegisterForm(props) {

    const context = useContext(ThemeContext);
    const formStyle = context.formStyle;
    const formButtonStyle = context.formButtonStyle;
    const centerText = context.centerText
    const setDidRegister = props.setDidRegister

    //Register Form Error logic
    const [isRegisterError, setIsRegisterError] = useState(false)
    const [registerErrorMessage, setRegisterErrorMessage] = useState({})
    const registerErrorCondition = () => {
        if(isRegisterError === false) {
            return false
        }
        else {
            return <RegisterError registerErrorMessage={registerErrorMessage}/>
        }
    }

    const handleRegSubmit = (ev) => {

        ev.preventDefault()
        const {first_name, last_name, email, password} = ev.target
        setIsRegisterError( false)   ///set error state back to false for new register attempt

        AuthApiService.postUser({
            first_name: first_name.value,
            last_name: last_name.value,
            email: email.value,
            password: password.value,
        })
            .then(user => {
                setDidRegister(true)
                first_name.value = ''
                last_name.value = ''
                email.value = ''
                password.value = ''
            })
            .catch(error => {
                setIsRegisterError(true)
                setRegisterErrorMessage(error)
                console.error({error})
            })
    }

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
            <form onSubmit={handleRegSubmit}>
                <div style={centerText}>
                    <header>
                        <h2>Register</h2>
                    </header>
                    <section style={margin}>
                        <header>
                            <h3>Find the crazy deals today!</h3>
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
            {registerErrorCondition()}
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