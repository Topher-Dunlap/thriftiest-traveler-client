import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import LoginFormInput from './LoginFormInputs';
import AuthService from '../service/auth-service';
import AuthContext from '../components/AuthContext';
import TokenService from '../service/token-service';
import UserIdService from '../service/userId-token';
import '../css/theme.css';
import '../css/loginForm.css';

export default function LoginForm() {

    const authLoginContext = useContext(AuthContext);
    const {register, errors} = useForm();
    const history = useHistory();
    const [errorState, setErrorState] = useState('');

    const handleSubmitJwtAuth = (ev) => {
        ev.preventDefault();
        const {email, password} = ev.target;

        AuthService.postLogin({
            email: email.value,
            password: password.value,
        })
            .then(res => {
                email.value = '';
                password.value = '';
                TokenService.saveAuthToken(res.authToken);
                authLoginContext.setLoggedIn(TokenService.hasAuthToken());
                UserIdService.saveIDToken(res.user_id);
                history.push('/deals');
            })
            .catch(error => {
                console.error({error});
                setErrorState(error.error);
            });
    };

    const mapFormInputs = formOptions.map((option, idx) =>
        <LoginFormInput
            key={idx}
            fieldLabel={option.fieldLabel}
            inputName={option.inputName}
            type={option.type}
        />
    );
    return (
        <div className='formStyle'>
            <form onSubmit={handleSubmitJwtAuth}>
                <header className='headerStyle'>
                    <h1>Login</h1>
                </header>
                {
                    TokenService.hasAuthToken() ?
                        <h3 className='tokenColor'>You Are logged in!</h3> :
                        <h4 className='errorMessageStyling'>{errorState}</h4>
                }
                <div>
                    {mapFormInputs}
                    {/*////password input was manually added due to but with mapping stripping password "type"*/}
                    <div>
                        <label
                            className='formElementSpacing'>
                            Password
                        </label>
                        <input
                            ref={register({required: true, minLength: 2})}
                            className='formInputStyle'
                            name="password"
                            type="password"
                            autoComplete="on"/>
                        <br/>
                        {errors.inputName && <p className='errorMessageStyling'>This is required</p>}
                    </div>
                    <button
                        type="submit"
                        className='formButtonStyle'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

const formOptions = [
    {
        fieldLabel: 'E-Mail',
        inputName: 'email',
        type: 'text',
    },
];
