import React, {useEffect, useState, useContext} from 'react';
import DealsService from '../service/deals-service';
import Loader from 'react-loader-spinner';
import DealsResults from './DealsResults';
import EventContext from "./EventContext";
import ComponentMountService from "../service/componentMount-service";

export default function Deals() {

    ///useState for user location API
    const [flightDeals, setFlightDeals] = useState([]);
    ///useState for loading spinner
    const [loadingSpinner, setLoadingSpinner] = useState(false);

    const [eventData, setEventData] = useState([]);
    // const eventData = useContext(EventContext)

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
                    if(response.data[0] !== undefined){
                        // console.log("flightDeals response.data[0]]: ", response.data[0])
                        setFlightDeals([...flightDeals, response.data[0]])
                    }
                    // console.log("flightDeals: ", flightDeals)
                    setLoadingSpinner(false)
                })
                .catch(error => console.log(error))
        })
    }

    function loadResults(resultValues) {
        console.log("resultValues length: ", resultValues.length)
        console.log("resultValues: ", resultValues)
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
        return false
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