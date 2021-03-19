import React from 'react';
import Login from './Login';
import '../css/registerTy.css';

export default function RegisterTy() {

    return (
        <div className='bottomMargin'>
            <div className='centerTextTy'>
                <h2>
                    Thank You For Registering!
                </h2>
                <p>
                    Please login to begin searching.
                </p>
            </div>
            <Login/>
        </div>
    );
}

