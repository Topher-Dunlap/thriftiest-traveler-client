import React, {useState} from 'react';
import AuthApiService from '../service/auth-service';
import RegisterFormInput from './RegisterFormInputs';
import RegisterError from './RegisterError';
import '../css/registerForm.css';
import '../css/theme.css';

export default function RegisterForm(props) {

    const setDidRegister = props.setDidRegister;

    //Register Form Error logic
    const [isRegisterError, setIsRegisterError] = useState(false);
    const [registerErrorMessage, setRegisterErrorMessage] = useState({});
    const registerErrorCondition = () => {
        if (isRegisterError === false) {
            return false;
        } else {
            return <RegisterError registerErrorMessage={registerErrorMessage}/>;
        }
    };

    const handleRegSubmit = (ev) => {

        ev.preventDefault();
        const {first_name, last_name, email, password} = ev.target;
        setIsRegisterError(false);   ///set error state back to false for new register attempt

        AuthApiService.postUser({
            first_name: first_name.value,
            last_name: last_name.value,
            email: email.value,
            password: password.value,
        })
            .then(user => {
                setDidRegister(true);
                first_name.value = '';
                last_name.value = '';
                email.value = '';
                password.value = '';
            })
            .catch(error => {
                setIsRegisterError(true);
                setRegisterErrorMessage(error);
                console.error({error});
            });
    };

    const mapFormInputs = formOptions.map((option, idx) =>
        <RegisterFormInput
            key={idx}
            fieldLabel={option.fieldLabel}
            inputName={option.inputName}
            type={option.type}
        />
    );

    return (
        <div className='formStyle'>
            <form onSubmit={handleRegSubmit}>
                <div className='centerText'>
                    <header>
                        <h2>Register</h2>
                    </header>
                    <section className='margin'>
                        <header>
                            <h3>Find the crazy deals today!</h3>
                        </header>
                    </section>
                </div>
                {mapFormInputs}
                <button
                    className='formButtonStyle'
                    type='submit'>
                    Sign Up
                </button>
            </form>
            {registerErrorCondition()}
        </div>
    );
}

const formOptions = [
    {
        fieldLabel: 'First name',
        inputName: 'first_name',
        type: 'text',
    },
    {
        fieldLabel: 'Last name',
        inputName: 'last_name',
        type: 'text',
    },
    {
        fieldLabel: 'Email',
        inputName: 'email',
        type: 'text',
    },
    {
        fieldLabel: 'Password',
        inputName: 'password',
        type: 'password',
    },
];