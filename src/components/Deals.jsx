import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {BsFilter} from "react-icons/bs";
import {FaGlobeAsia} from "react-icons/fa";
import DealsResults from './DealsResults';

export default function Deals() {

    return (
        <section style={centerText}>
            <h2 style={centerText}>Deals</h2>
            <IconButton aria-label="delete" style={filterIcon}>
                <BsFilter
                    size={25}/>
            </IconButton>
            <IconButton aria-label="delete" style={globeIcon}>
                <FaGlobeAsia
                    size={25}/>
            </IconButton>
            <DealsResults/>
        </section>
    )
}

const centerText = {
    textAlign: "center",
}

const filterIcon = {
    float: "right",
    padding: "10px",
    margin: "1rem 12% 2rem 0",
}

const globeIcon = {
    float: "right",
    padding: "10px",
    margin: "1rem .5rem 2rem 0",
}
