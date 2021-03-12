import React, { useEffect, useState} from 'react';
import DealsService from '../service/deals-service';
import Loader from 'react-loader-spinner';
import DealsResults from './DealsResults';

export default function Deals() {

    ///useState for user location API
    const [flightDeals, setFlightDeals] = useState('');
    ///useState for loading spinner
    const [loadingSpinner, setLoadingSpinner] = useState(false);

    useEffect(() => {
            ///set spinner in motion when loading
            setLoadingSpinner(true)
            ///get disaster and terror event data
            DealsService.getDeals()
                .then(response => {
                    setFlightDeals(response.data)
                    setLoadingSpinner(false)
                })
                .catch(error => console.log(error))
        }, []
    );

    function loadResults(resultValues) {
        // console.log("flightDeals: ", flightDeals)
        if (resultValues !== '') {
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
            )
        }
        return false
    }

    return (
        <section style={centerText}>
            <h2 style={centerText}>Deals</h2>
            <Loader
                style={centerText}
                type="TailSpin"
                color="grey"
                height={80}
                width={80}
                visible={loadingSpinner}/>
            {loadResults(flightDeals)}
        </section>
    )
}

const centerText = {
    textAlign: "center",
}