import React, {useContext, useEffect, useState} from 'react';
import DealsService from '../service/deals-service';
import Loader from 'react-loader-spinner';
import DealsResults from './DealResult';
import ComponentMountService from "../service/componentMount-service";
import ErrorContext from "./ErrorContext";

export default function Deals() {

    const [flightDeals, setFlightDeals] = useState([]);     ///useState for user location API
    const [loadingSpinner, setLoadingSpinner] = useState(true);    ///useState for loading spinner
    const [noPriceFlight, setNoPriceFlight] = useState([]);
    const errorContext = useContext(ErrorContext);  ///declare error context

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
                    if(response.data === undefined || response.data === "no price" || response.data === "no deal"){
                        setNoPriceFlight(response.data[0])
                    }
                    else{
                        setFlightDeals(flightDeals => [...flightDeals, response.data[0]]);
                    }
                    setLoadingSpinner(false);
                })
                .catch(error => {
                    errorContext.setErrorState(error)
                });
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
    fontSize: "2rem",
    color: "#333029",
}