import React, {useEffect, useState} from 'react';
import DealsService from '../service/deals-service';
import Loader from 'react-loader-spinner';
import DealsResults from './DealsResults';
// import EventContext from "./EventContext";
import ComponentMountService from "../service/componentMount-service";

export default function Deals() {

    ///useState for user location API
    const [flightDeals, setFlightDeals] = useState([]);
    ///useState for loading spinner
    const [loadingSpinner, setLoadingSpinner] = useState(false);

    useEffect(() => {
        ComponentMountService.getEvents()
            .then(response => {
                console.log("event api response: ", response.data)
                dealsCall(response.data)
            })
            .catch(error => console.log(error))
        }, []
    );

    function dealsCall(eventData) {
        eventData.forEach(event => {
            ///set spinner in motion when loading
            setLoadingSpinner(true)
            ///get disaster and terror event data
            DealsService.getDeals([event])
                .then(response => {
                    console.log("raw response pre-flight state add: ", response)
                    if(response.data[0] !== undefined){
                        // console.log("flightDeals response.data[0]]: ", response.data[0])
                        setFlightDeals(flightDeals => [...flightDeals, response.data[0]])
                        // console.log("flightDeals inside IF: ", flightDeals)
                    }
                    setLoadingSpinner(false)
                })
                .catch(error => console.log(error))
        })
    }

    function loadResults(resultValues) {
        console.log("deals pop data: ", resultValues)
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
        // return false
    }

    return (
        <section style={centerText}>
            <h2 style={centerText}>Deals</h2>
            {loadResults(flightDeals)}
            <Loader
                style={centerText}
                type="TailSpin"
                color="grey"
                height={80}
                width={80}
                visible={loadingSpinner}/>
        </section>
    )
}

const centerText = {
    textAlign: "center",
}