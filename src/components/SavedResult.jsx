import React, {useContext} from 'react';
import dealsPhoto from '../img/deals.png';
import {IoMdAirplane} from 'react-icons/io';
import {BsBookmarkDash} from 'react-icons/bs';
import IconButton from '@material-ui/core/IconButton';
import SaveService from '../service/save-service';
import UserIdService from '../service/userId-token';
import DeleteContext from './DeleteContext';
import ErrorContext from './ErrorContext';
import '../css/theme.css';


export default function SavedResult(props) {

    ///props
    let countryName = props.countryName;
    let placeName = props.placeName;
    let title = props.title;
    let description = props.description;
    let price = props.price;
    let carrier = props.carrier;
    let departure = props.departure;
    let SavedId = props.SavedId;

    const deleteContext = useContext(DeleteContext);
    const errorContext = useContext(ErrorContext);
    let user_id = UserIdService.getIdToken();    ///useID info from login

    let handleDeleteSubmit = e => {
        e.preventDefault();
        SaveService.deleteSavedFlight(user_id, SavedId)
            .then(deletedResponse => {
                deleteContext.setDeleteFlight(true);
            })
            .catch(error => errorContext.setErrorState(error));
    };

    return (
        <li className='resultsStyle'>
            <div className='resultsDivStyle'>
                <img
                    className='resultsImageStyle'
                    alt="disaster"
                    src={dealsPhoto}/>
                <div>
                    <h3 className='resultsLocationNameFloat'>Flights to {placeName}, {countryName}</h3>
                    <h4 className='resultsTitleNameFloat'>{title}</h4>
                    <IconButton
                        onClick={handleDeleteSubmit}
                        style={resultsIconBookFloat}>
                        <BsBookmarkDash size={25}/>
                    </IconButton>
                    <IconButton style={resultsIconFlight}>
                        <IoMdAirplane size={25}/>
                    </IconButton>
                    <div className='resultsClearFloat'>
                        <h2 className='resultsHeaderStyle'>${price}</h2>
                        <p className='resultsDateStyle'>{carrier}, departing {departure}</p>
                        <br/>
                        <p className='resultsDescStyle'>
                            {description}
                        </p>
                    </div>
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