import React from 'react';
import DealsResults from './DealsResults';

export default function Deals() {

    return (
        <section style={centerText}>
            <h2>Deals</h2>
            <ul style={listStyle}>
                <li>
                    New deals
                </li>
            </ul>
            <DealsResults/>
        </section>
    )
}

const centerText = {
    textAlign: "center",
}

const listStyle ={
    listStyleType: "none",
    padding: "0",
}
