import React, {useContext, useEffect, useState} from 'react';
import SaveService from '../service/save-service';
import Loader from 'react-loader-spinner';
import SavedResults from './SavedResult';
import UserIdService from "../service/userId-token";
import DeleteContext from "./DeleteContext";

export default function Saved() {

    ///useState for user location API
    const [savedFlights, setSavedFlights] = useState('');
    ///useState for loading spinner
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    ///useID info from login
    let user_id = UserIdService.getIdToken()
    ///declare delete context
    const deleteContext = useContext(DeleteContext);

    useEffect(() => {
            ///set spinner in motion when loading
            setLoadingSpinner(true)
            ///get disaster and terror event data
            SaveService.getAllSaved(user_id)
                .then(response => {
                    setSavedFlights(response.data)
                    setLoadingSpinner(false)
                    deleteContext.setDeleteFlight(false)
                })
                .catch(error => console.log(error))
        }, [deleteContext.deleteFlight]
    );

    function loadResults(resultValues) {
        console.log("savedFlights: ", savedFlights)
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
            )
        }
        return false
    }

    return (
        <section style={centerText}>
            <h2 style={headerStyle}>Saved Deals</h2>
            <Loader
                style={centerText}
                type="TailSpin"
                color="grey"
                height={80}
                width={80}
                visible={loadingSpinner}/>
            {savedFlights === '' ? "No saved flights" : loadResults(savedFlights)}
        </section>
    )
}

const centerText = {
    textAlign: "center",
}

const headerStyle = {
    fontSize: "2rem"
}