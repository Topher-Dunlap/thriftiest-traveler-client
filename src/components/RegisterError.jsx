import React from 'react';

export default function RegisterError(props) {

    const errorObj = props.registerErrorMessage.error

    return (
        <p style={centerText}>
            {errorObj}
        </p>
    )
}

const centerText = {
    textAlign: "center",
    color: "red"
}

