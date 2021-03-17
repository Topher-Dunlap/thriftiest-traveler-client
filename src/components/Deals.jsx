import React, {useEffect, useState} from 'react';
import DealsService from '../service/deals-service';
import Loader from 'react-loader-spinner';
import DealsResults from './DealResult';
import ComponentMountService from "../service/componentMount-service";

export default function Deals() {

    const [flightDeals, setFlightDeals] = useState([]);     ///useState for user location API
    const [loadingSpinner, setLoadingSpinner] = useState(true);    ///useState for loading spinner

    useEffect(() => {
        ComponentMountService.getEvents()
            .then(response => {
                dealsCall(response.data);
            })
            .catch(error => console.log(error));
        }, []
    );

    function dealsCall(eventData) {
        eventData.forEach(event => {
            setLoadingSpinner(true);
            DealsService.getDeals([event])    ///get disaster and terror event data
                .then(response => {
                    if(response.data[0] !== undefined){
                        setFlightDeals(flightDeals => [...flightDeals, response.data[0]]);
                    }
                    setLoadingSpinner(false);
                })
                .catch(error => console.log(error));
        })
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
            )
        }
    }

    return (
        <section style={centerText}>
            <h1 style={headerStyle}>Deals</h1>
            {loadResults(flightDeals)}
            <Loader
                style={centerText}
                type="TailSpin"
                color="grey"
                height={80}
                width={80}
                visible={loadingSpinner}
            />
        </section>
    )
}


const centerText = {
    textAlign: "center",
}

const headerStyle = {
    fontSize: "2rem"
}