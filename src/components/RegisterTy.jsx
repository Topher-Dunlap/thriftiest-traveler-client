import React from 'react';
import Login from './Login'

export default function RegisterTy() {

    return (
        <div style={bottomMargin}>
            <div style={centerText}>
                <h2>
                    Thank You For Registering!
                </h2>
                <p>
                    Please login to begin searching.
                </p>
            </div>
            <Login/>
        </div>
    )
}

const centerText = {
    textAlign: "center",
    margin: "4rem 0",
}

const bottomMargin = {
    margin: "0 0 4rem"
}

