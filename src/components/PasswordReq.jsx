import React from 'react';
import '../css/theme.css';
import '../css/passwordReq.css';

export default function Login() {

    return (
        <div className='passwordReq'>
            <h3 className='passHeaderStyle'>Password Requirements</h3>
            <ul className='passwordListStyle'>
                <li>Password must contain 1 upper case, lower case, number and special character</li>
                <li>Password must be longer than 8 characters</li>
                <li>Password must be less than 72 characters</li>
            </ul>
        </div>
    );
}




