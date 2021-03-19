import React from 'react';
import '../css/registerError.css';

export default function RegisterError(props) {

    const errorObj = props.registerErrorMessage.error;

    return (
        <p className='centerTextError'>
            {errorObj}
        </p>
    );
}

