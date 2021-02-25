import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {BsFilter} from "react-icons/bs";
import {FaGlobeAsia} from "react-icons/fa";
import DealsResults from './DealsResults';

export default function Deals() {

    return (
        <section style={centerText}>
            <IconButton aria-label="delete" style={filterIcon}>
                <BsFilter
                    size={40}/>
            </IconButton>
            <IconButton aria-label="delete" style={globeIcon}>
                <FaGlobeAsia
                    size={40}/>
            </IconButton>
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

const listStyle = {
    listStyleType: "none",
    padding: "0",
}

const filterIcon = {
    float: "right",
    margin: "1rem 2rem 0 0",
}

const globeIcon = {
    float: "right",
    margin: "1rem 0 0 0",
}
