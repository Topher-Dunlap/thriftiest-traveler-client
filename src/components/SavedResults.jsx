import React, {useContext} from 'react';
import disaster_1 from '../img/disaster_1.jpg';
import {IoMdAirplane} from 'react-icons/io';
import {BsBookmarkDash} from 'react-icons/bs';
import IconButton from '@material-ui/core/IconButton';
import ThemeContext from "./ThemeContext";


export default function SavedResults(props) {

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
    const titleNameFloat = context.resultsTitleNameFloat;

    ///props
    let countryName = props.countryName
    let placeName = props.placeName
    let title = props.title
    let description = props.description
    let price = props.price
    let carrier = props.carriersName
    let departure = props.departure

    return (
        <li style={resultsStyle}>
            <div style={resultsDivStyle}>
                <img
                    style={imageStyle}
                    alt="disaster"
                    src={disaster_1}/>
                <div>
                    <h3 style={locationNameFloat}>Flights to {placeName}, {countryName}</h3>
                    <h4 style={titleNameFloat}>{title}</h4>
                    <IconButton style={iconBookFloat}>
                        <BsBookmarkDash size={25}/>
                    </IconButton>
                    <IconButton style={iconFlight}>
                        <IoMdAirplane size={25}/>
                    </IconButton>
                    <div style={clearFloat}>
                        <h2 style={headerStyle}>${price}</h2>
                        <p style={dateStyle}>{carrier}, departing {departure}</p>
                        <br/>
                        <p style={descStyle}>
                            {description}
                        </p>
                        <div style={divAddressStyle}>
                            <h3 style={weatherMargin}>Weather in {placeName}:</h3>
                            <p style={weatherMargin}>82 Degrees, Sunny</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}