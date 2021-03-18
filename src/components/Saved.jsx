import React, {useContext, useEffect, useState} from 'react';
import SaveService from '../service/save-service';
import {FcEmptyFilter} from 'react-icons/fc';
import Loader from 'react-loader-spinner';
import SavedResults from './SavedResult';
import UserIdService from '../service/userId-token';
import DeleteContext from './DeleteContext';
import ErrorContext from './ErrorContext';
import IconButton from '@material-ui/core/IconButton';
import ThemeContext from './ThemeContext';
import Filter from './Filter';

export default function Saved() {


	const [savedFlights, setSavedFlights] = useState('');     ///for user location API
	const [loadingSpinner, setLoadingSpinner] = useState(false);
	const [filterSelected, setFilterSelected] = useState(false);

	const errorContext = useContext(ErrorContext);
	const deleteContext = useContext(DeleteContext);
	const context = useContext(ThemeContext);
	const headerStyle = context.sectionHeaderStyle;
	let user_id = UserIdService.getIdToken();    ///useID info from login

	useEffect(() => {
		setLoadingSpinner(true);
		SaveService.getAllSaved(user_id)  ///get disaster and terror event data
			.then(response => {
				setSavedFlights(response.data);
				setLoadingSpinner(false);
				deleteContext.setDeleteFlight(false);
			})
			.catch(error => errorContext.setErrorState(error));
	}, [deleteContext.deleteFlight]
	);

	function loadResults(resultValues) {
		if (resultValues !== '') {
			return savedFlights.map((event, idx) =>
				<SavedResults
					key={idx}
					countryName={event.country_name}
					placeName={event.place_name}
					title={event.title}
					category={event.category}
					description={event.description}
					price={event.price}
					carrier={event.carrier}
					departure={event.departure}
					SavedId={event.id}
				/>
			);
		}
	}

	return (
		<section style={centerText}>
			<h1 style={headerStyle}>Saved Deals</h1>
			<Filter/>
			<Loader
				style={centerText}
				type="TailSpin"
				color="grey"
				height={80}
				width={80}
				visible={loadingSpinner}/>
			{savedFlights === '' ? 'No saved flights' : loadResults(savedFlights)}
		</section>
	);
}

const centerText = {
	textAlign: 'center',
};

