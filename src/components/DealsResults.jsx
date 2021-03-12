import React, {useContext} from 'react';
import disaster_1 from '../img/disaster_1.jpg';
import IconButton from '@material-ui/core/IconButton';
import {BsBookmarkPlus} from 'react-icons/bs';
import {IoMdAirplane} from 'react-icons/io';
import ThemeContext from './ThemeContext';
import SaveService from '../service/save-service';
import UserIdService from "../service/userId-token";


export default function DealsResults(props) {

    ///context style
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

    ///event api results.
    let title = props.title;
    let description = props.description;
    let countryName = props.countryName;
    let placeName = props.placeName;
    let price = props.price;
    let carrier = props.carrier;
    let departure = props.departure.DepartureDate.slice(0, 10) ? props.departure.DepartureDate.slice(0, 10) : '';

    ///useID info from login
    let user_id = UserIdService.getIdToken()

    let handleSaveSubmit = e => {
        e.preventDefault()
        // get the form fields from the event
        const flight = {
            title: title,
            country_name: countryName,
            description: description,
            place_name: placeName,
            price: price,
            carrier: carrier,
            departure: departure,
            traveler_user: user_id
        }
        SaveService.saveFlight(flight)
            .then( savedResponse => console.log("saveFLight response: ", savedResponse))
    }


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
                    <IconButton
                        onClick={handleSaveSubmit}
                        style={iconBookFloat}>
                        <BsBookmarkPlus size={25}/>
                    </IconButton>
                    <IconButton
                        href={"https://www.orbitz.com/"}
                        target="_blank"
                        style={iconFlight}
                    >
                        <IoMdAirplane size={25}/>
                    </IconButton>
                </div>
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
        </li>
    )
}
