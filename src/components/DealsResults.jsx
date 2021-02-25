import React, {useContext} from 'react';
import disaster_1 from '../img/disaster_1.jpg';
import IconButton from '@material-ui/core/IconButton';
import {BsBookmarkPlus} from "react-icons/bs";
import {IoMdAirplane} from "react-icons/io";
import ThemeContext from "./ThemeContext";


export default function FreshDealResults() {

    const context = useContext(ThemeContext);
    const clearFloat = context.resultsClearFloat;
    const locationNameFloat = context.resultsLocationNameFloat;
    const weatherMargin = context.resultsWeatherMargin;
    const iconBookFloat = context.resultsIconBookFloat;
    const iconFlight = context.resultsIconFlight;
    const descStyle = context.resultsDescStyle;
    const headerStyle = context.resultsHeaderStyle;
    const dateStyle = context.resultsDateStyle;
    const imageStyle = context.resultsImageStyle;
    const divAddressStyle = context.resultsDivAddressStyle;
    const resultsStyle = context.resultsStyle;
    const resultsDivStyle = context.resultsDivStyle;

    return (
        <li style={resultsStyle}>
            <div style={resultsDivStyle}>
                <img
                    style={imageStyle}
                    alt="disaster"
                    src={disaster_1}/>
                <div>
                    <h3 style={locationNameFloat}>Flights To Peru</h3>
                    <IconButton style={iconBookFloat}>
                        <BsBookmarkPlus size={25}/>
                    </IconButton>
                    <IconButton style={iconFlight}>
                        <IoMdAirplane size={25}/>
                    </IconButton>
                </div>
                <div style={clearFloat}>
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
        </li>
    )
}

// const weatherMargin = {
//     margin: "0 .5rem 0"
// }

// const clearFloat = {
//     clear: "left"
// }

// const locationNameFloat = {
//     margin: "2rem 2rem .5rem",
//     float: "left",
// }
//
// const iconBookFloat = {
//     float: "right",
//     padding: "10px",
//     margin: "2rem 2rem .5rem 0rem",
// }
//
// const iconFlight = {
//     float: "right",
//     padding: "10px",
//     margin: "2rem .5rem 0 0",
// }
//
// const descStyle = {
//     margin: "2rem 2rem .5rem"
// }
//
// const headerStyle = {
//     margin: "2rem 2rem 0",
//     fontSize: "2.5rem",
// }
//
// const dateStyle = {
//     margin: "0 0 0 2rem",
// }
//
// const imageStyle = {
//     width: "100%",
//     height: "100%",
//     borderRadius: "5px 5px 0px 0px",
// }
//
// const divAddressStyle = {
//     display: "flex",
//     textAlign: "left",
//     padding: "0",
//     margin: "3rem 2rem 0",
//     height: "75%",
// }
//
//
// const resultsStyle = {
//     listStyleType: "none",
//     textAlign: "left",
//     padding: "2rem",
//     margin: "4rem auto",
//     height: "20%",
//     width: "75%",
//     borderRadius: "5px",
// }
//
// const resultsDivStyle = {
//     borderRadius: "5px",
//     backgroundColor: "#FFFFFF",
//     padding: "0 0 3rem",
//     boxShadow:
//         `0 2.8px 1.2px rgba(0, 0, 0, 0.034),
//         0 6.7px 2.3px rgba(0, 0, 0, 0.048),
//         0 12.5px 4px rgba(0, 0, 0, 0.06),
//         0 22.3px 6.9px rgba(0, 0, 0, 0.072),
//         0 41.8px 8.4px rgba(0, 0, 0, 0.086),
//         0 100px 100px rgba(0, 0, 0, 0.12)`
// }