import React, {useContext} from 'react';
import disaster_1 from '../img/disaster_1.jpg';
import {IoMdAirplane} from 'react-icons/io';
import {BsBookmarkDash} from 'react-icons/bs';
import IconButton from '@material-ui/core/IconButton';
import ThemeContext from "./ThemeContext";


export default function Saved() {

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
                    <h3 style={locationNameFloat}>Peru</h3>
                    <IconButton style={iconBookFloat}>
                        <BsBookmarkDash size={25}/>
                    </IconButton>
                    <IconButton style={iconFlight}>
                        <IoMdAirplane size={25}/>
                    </IconButton>
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
            </div>
        </li>
    )
}