import React from 'react';
import SavedResults from '../components/SavedResult';
import DealsResults from '../components/DealResult';

const FilterService = {

    filterSavedHighLow(flightArray) {
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

    filterSavedLowHigh(flightArray) {
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

    filterDealsHighLow(flightArray) {
        flightArray.sort((a, b) => (a.price > b.price) ? 1 : -1);
        return flightArray.map((event, idx) =>
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
    },

    filterDealsLowHigh(flightArray) {
        flightArray.sort((a, b) => (a.price < b.price) ? 1 : -1);
        return flightArray.map((event, idx) =>
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
    },
};

export default FilterService;
