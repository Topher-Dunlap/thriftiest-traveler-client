import React, { useEffect, useState} from 'react';
import SaveService from '../service/save-service';
import Loader from 'react-loader-spinner';
import SavedResults from './SavedResults';
import UserIdService from "../service/userId-token";

export default function Saved() {

    ///useState for user location API
    const [savedFlights, setSavedFlights] = useState('');
    ///useState for loading spinner
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    ///useID info from login
    let user_id = UserIdService.getIdToken()

    useEffect(() => {
            ///set spinner in motion when loading
            setLoadingSpinner(true)
            ///get disaster and terror event data
            SaveService.getAllSaved(user_id)
                .then(response => {
                    setSavedFlights(response.data)
                    setLoadingSpinner(false)
                    // console.log("saved api results: ", response.data)
                })
                .catch(error => console.log(error))
        }, []
    );

    function loadResults(resultValues) {
        // console.log("flightDeals: ", resultValues)
        if (resultValues !== '') {
            return savedFlights.map((event, idx) =>
                <SavedResults
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
            <h2 style={centerText}>Saved Flights</h2>
            <Loader
                style={centerText}
                type="TailSpin"
                color="grey"
                height={80}
                width={80}
                visible={loadingSpinner}/>
            {loadResults(savedFlights)}
        </section>
    )
}

const centerText = {
    textAlign: "center",
}