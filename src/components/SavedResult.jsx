import React, {useContext} from 'react';
import dealsPhoto from '../img/deals.png';
import {IoMdAirplane} from 'react-icons/io';
import {BsBookmarkDash} from 'react-icons/bs';
import IconButton from '@material-ui/core/IconButton';
import ThemeContext from './ThemeContext';
import SaveService from '../service/save-service';
import UserIdService from '../service/userId-token';
import DeleteContext from './DeleteContext';
import ErrorContext from './ErrorContext';


export default function SavedResult(props) {

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
			.then( deletedResponse => {
				deleteContext.setDeleteFlight(true);
			})
			.catch(error => errorContext.setErrorState(error));
	};

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
						onClick={handleDeleteSubmit}
						style={iconBookFloat}>
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
					</div>
				</div>
			</div>
		</li>
	);
}