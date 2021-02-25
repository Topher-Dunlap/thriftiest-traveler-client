import React from 'react';
import disaster_1 from '../img/disaster_1.jpg';
import {IoMdAirplane} from "react-icons/io";
import IconButton from '@material-ui/core/IconButton';


export default function Saved() {

    return (
        <li style={resultsStyle}>
            <div style={resultsDivStyle}>
                <img
                    style={imageStyle}
                    alt="disaster"
                    src={disaster_1}/>
                <div style={{float: "left"}}>
                    <div>
                        <h3 style={locationNameFloat}>Peru</h3>
                        <IconButton style={iconFloat}>
                            <IoMdAirplane size={40}/>
                        </IconButton>
                    </div>
                    <div style={infoStyle}>
                        <h2 style={headerStyle}>$100</h2>
                        <p style={dateStyle}>Feb 24 - 28</p>
                        <br/>
                        <p style={descStyle}>
                            Peru has recently experienced a massive earthquake and plane tickets are
                            plummeting as tourists avoid traveling to the area. While some resources for
                            travelers may be inaccessible it's still possible to visit this location and experience
                            peru at a time when prices are affordable!
                        </p>
                        <div style={divAddressStyle}>
                            <h3 style={weatherMargin}>Weather in Peru:</h3>
                            <p style={weatherMargin}>82 Degrees, Sunny</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

const weatherMargin = {
    margin: "0 .5rem 0"
}

const locationNameFloat = {
    margin: "0rem 2rem .5rem",
    float: "left",
}

const iconFloat = {
    float: "right",
    margin: "0rem 0rem 2rem .5rem",
}

const infoStyle = {
    // borderStyle: "solid",
    // borderWidth: "1px",
}

const descStyle = {
    margin: "0rem 0rem 2rem 2rem",
}

const headerStyle = {
    margin: "2rem 0 0 2rem",
    fontSize: "2.5rem",
}

const dateStyle = {
    margin: "0 0 0 2rem",
}

const imageStyle = {
    float: "left",
    width: "550px",
    height: "auto",
}

const divAddressStyle = {
    display: "flex",
    textAlign: "left",
    padding: "0",
    margin: "3rem 2rem 0",
    height: "75%",
}


const resultsStyle = {
    listStyleType: "none",
    textAlign: "left",
    padding: "2rem",
    margin: "6rem 2rem",
    height: "auto",
    width: "auto",
    borderRadius: "5px",
    boxShadow:
        `0 2.8px 1.2px rgba(0, 0, 0, 0.034),
        0 6.7px 2.3px rgba(0, 0, 0, 0.048),
        0 12.5px 4px rgba(0, 0, 0, 0.06),
        0 22.3px 6.9px rgba(0, 0, 0, 0.072),
        0 41.8px 8.4px rgba(0, 0, 0, 0.086),
        0 100px 100px rgba(0, 0, 0, 0.12)`
}

const resultsDivStyle = {
    clear: "both",
    display: "inline-flex",
    backgroundColor: "#FFFFFF",
}