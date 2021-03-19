import React, {useContext, useState} from 'react';
import dealsPhoto from '../img/deals.png';
import IconButton from '@material-ui/core/IconButton';
import {BsBookmarkPlus, BsBookmarkDash} from 'react-icons/bs';
import {IoMdAirplane} from 'react-icons/io';
import DeleteContext from './DeleteContext';
import ErrorContext from './ErrorContext';
import SaveService from '../service/save-service';
import UserIdService from '../service/userId-token';
import '../css/theme.css';


export default function DealResult(props) {

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
            .then(deletedResponse => {
                deleteContext.setDeleteFlight(true);
            })
            .catch(error => errorContext.setErrorState(error));
    };

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
        };
        SaveService.saveFlight(flight)
            .then(savedResponse => setSavedFlightId(savedResponse.id))
            .catch(error => errorContext.setErrorState(error));
    };


    return (
        <li className='resultsStyle'>
            <div className='resultsDivStyle'>
                <img
                    className='resultsImageStyle'
                    alt="disaster"
                    src={dealsPhoto}
                />
                <div>
                    <h3 className='resultsLocationNameFloat'>Flights to {placeName}, {countryName}</h3>
                    <h4 className='resultsTitleNameFloat'>{title}</h4>
                    <IconButton
                        onClick={savedBool ? handleDeleteSubmit : handleSaveSubmit}
                        style={resultsIconBookFloat}>
                        {savedBool ? <BsBookmarkDash size={25}/> : <BsBookmarkPlus size={25}/>}
                    </IconButton>
                    <IconButton
                        href={'https://www.orbitz.com/'}
                        target="_blank"
                        style={resultsIconFlight}
                    >
                        <IoMdAirplane size={25}/>
                    </IconButton>
                </div>
                <div className='resultsClearFloat'>
                    <h2 className='resultsHeaderStyle'>${price}</h2>
                    <p className='resultsDateStyle'>{carrier}, departing {departure}</p>
                    <br/>
                    <p className='resultsDescStyle'>
                        {description}
                    </p>
                </div>
            </div>
        </li>
    );
}

const resultsIconBookFloat = {
    float: 'right',
    padding: '10px',
    margin: '2rem 2rem .5rem 0rem',
    color: '#F7C841',
};

const resultsIconFlight = {
    float: 'right',
    padding: '10px',
    margin: '2rem .5rem 0 0',
    color: '#F7C841',
};
