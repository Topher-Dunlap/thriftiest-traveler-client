import React, {useContext, useEffect, useState} from 'react';
import {BsFilterRight} from 'react-icons/bs';
import DealsService from '../service/deals-service';
import Loader from 'react-loader-spinner';
import DealsResults from './DealResult';
import FilterService from '../service/filter-service';
import Filter from './Filter';
import ComponentMountService from '../service/componentMount-service';
import ErrorContext from './ErrorContext';
import IconButton from '@material-ui/core/IconButton';
import ThemeContext from './ThemeContext';

export default function Deals() {

    const context = useContext(ThemeContext);
    const filterStyle = context.resultFilterIconStyle;
    const headerStyle = context.sectionHeaderStyle;

    const [flightDeals, setFlightDeals] = useState([]);     ///user location API
    const [loadingSpinner, setLoadingSpinner] = useState(true);
    const [filterSelected, setFilterSelected] = useState('');
    const [noPriceFlight, setNoPriceFlight] = useState([]);
    const errorContext = useContext(ErrorContext);

    useEffect(() => {
            ComponentMountService.getEvents()
                .then(response => dealsCall(response.data))
                .catch(error => errorContext.setErrorState(error));
        }, []
    );

    function dealsCall(eventData) {
        eventData.forEach(event => {
            setLoadingSpinner(true);
            DealsService.getDeals([event])    ///get disaster and terror event data
                .then(response => {
                    if (response.data === undefined || response.data === 'no price' || response.data === 'no deal') {
                        setNoPriceFlight(response.data[0]);
                    } else {
                        setFlightDeals(flightDeals => [...flightDeals, response.data[0]]);
                    }
                    setLoadingSpinner(false);
                })
                .catch(error => {
                    errorContext.setErrorState(error);
                });
        });
    }

    function loadResults(resultValues) {
        if (resultValues.length > 0) {
            return flightDeals.map((event, idx) =>
                <DealsResults
                    key={idx}
                    countryName={event.countryName}
                    placeName={event.placeName}
                    title={event.title}
                    category={event.category}
                    description={event.description}
                    price={event.price}
                    carrier={event.carriersName}
                    departure={event.departure}
                />
            );
        }
    }

    function showFilteredTernary() {
        if (!loadingSpinner) {
            if(filterSelected === '') {
                return flightDeals.length === 0 ? 'No Deals' : loadResults(flightDeals);
            }
            else {
                return filterSelected ? FilterService.filterDealsHighLow(flightDeals) : FilterService.filterDealsLowHigh(flightDeals);
            }
        }
    }

    return (
        <section style={centerText}>
            <h1 style={headerStyle}>Deals</h1>
            <Filter
                setFilterSelected={setFilterSelected}
                filterSelected={filterSelected}
            />
            {showFilteredTernary()}
            <Loader
                style={centerText}
                type="TailSpin"
                color="grey"
                height={80}
                width={80}
                visible={loadingSpinner}
            />
        </section>
    );
}

const centerText = {
    textAlign: 'center',
};
