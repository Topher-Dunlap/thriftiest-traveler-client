import React, {useContext, useEffect, useState} from 'react';
import SaveService from '../service/save-service';
import Loader from 'react-loader-spinner';
import SavedResults from './SavedResult';
import UserIdService from '../service/userId-token';
import DeleteContext from './DeleteContext';
import ErrorContext from './ErrorContext';
import FilterService from '../service/filter-service';
import Filter from './Filter';
import '../css/theme.css';

export default function Saved() {


    const [savedFlights, setSavedFlights] = useState([]);     ///for user location API
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const [filterSelected, setFilterSelected] = useState('');

    const errorContext = useContext(ErrorContext);
    const deleteContext = useContext(DeleteContext);
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

    function showFilteredTernary() {
        if (filterSelected.length === 0) {
            return savedFlights.length === 0 ? 'No saved flights' : loadResults(savedFlights);
        } else {
            return filterSelected ? FilterService.filterSavedHighLow(savedFlights) : FilterService.filterSavedLowHigh(savedFlights);
        }
    }

    return (
        <section className='centerText'>
            <h1 className='sectionHeaderStyle'>Saved Deals</h1>
            <Filter
                setFilterSelected={setFilterSelected}
                filterSelected={filterSelected}
            />
            <Loader
                className='centerText'
                type="TailSpin"
                color="grey"
                height={80}
                width={80}
                visible={loadingSpinner}/>
            {showFilteredTernary()}
        </section>
    );
}


