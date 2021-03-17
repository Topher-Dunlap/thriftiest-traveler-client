import React, {useContext, useState} from 'react';
import dealsPhoto from '../img/deals.png';
import IconButton from '@material-ui/core/IconButton';
import {BsBookmarkPlus} from 'react-icons/bs';
import {BsBookmarkDash} from 'react-icons/bs';
import {IoMdAirplane} from 'react-icons/io';
import ThemeContext from './ThemeContext';
import DeleteContext from './DeleteContext';
import ErrorContext from "./ErrorContext";
import SaveService from '../service/save-service';
import UserIdService from '../service/userId-token';


export default function DealResult(props) {

    ///context style
    const context = useContext(ThemeContext);
    const clearFloat = context.resultsClearFloat;
    const locationNameFloat = context.resultsLocationNameFloat;
    const iconBookFloat = context.resultsIconBookFloat;
    const iconFlight = context.resultsIconFlight;
    const descStyle = context.resultsDescStyle;
    const headerStyle = context.resultsHeaderStyle;
    const dateStyle = context.resultsDateStyle;
    const imageStyle = context.resultsImageStyle;
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
    let departure = props.departure.DepartureDate === undefined ? '' : props.departure.DepartureDate.slice(0, 10);

    const errorContext = useContext(ErrorContext);  ///declare error context
    let user_id = parseInt(UserIdService.getIdToken());     ///useID info from login
    const [savedBool, setSavedBool] = useState(false);    ///save bool state
    const [savedFlightId, setSavedFlightId] = useState(false);    ///save bool state
    const deleteContext = useContext(DeleteContext);     ///declare delete context

    let handleDeleteSubmit = e => {
        e.preventDefault();
        setSavedBool(!savedBool);
        SaveService.deleteSavedFlight(user_id, savedFlightId)
            .then( deletedResponse => {
                deleteContext.setDeleteFlight(true);
            })
            .catch(error => errorContext.setErrorState(error));
    }

    let handleSaveSubmit = e => {
        e.preventDefault();
        setSavedBool(!savedBool);
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
            .then( savedResponse => setSavedFlightId(savedResponse.id))
            .catch(error => errorContext.setErrorState(error))
    }


    return (
        <li style={resultsStyle}>
            <div style={resultsDivStyle}>
                <img
                    style={imageStyle}
                    alt="disaster"
                    src={dealsPhoto}/>
                <div>
                    <h3 style={locationNameFloat}>Flights to {placeName}, {countryName}</h3>
                    <h4 style={titleNameFloat}>{title}</h4>
                    <IconButton
                        onClick={savedBool ? handleDeleteSubmit : handleSaveSubmit}
                        style={iconBookFloat}>
                        {savedBool ? <BsBookmarkDash size={25}/> : <BsBookmarkPlus size={25}/>}
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
                </div>
            </div>
        </li>
    )
}
