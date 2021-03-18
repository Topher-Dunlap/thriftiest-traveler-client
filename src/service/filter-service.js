import SavedResults from '../components/SavedResult';
import React from 'react';

const FilterService = {

    filterResultsHighLow(flightArray) {
        flightArray.sort((a, b) => (a.price > b.price) ? 1 : -1);
        return flightArray.map((event, idx) =>
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
    },

    filterResultsLowHigh(flightArray) {
        flightArray.sort((a, b) => (a.price < b.price) ? 1 : -1);
        return flightArray.map((event, idx) =>
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
    },
};

export default FilterService;
