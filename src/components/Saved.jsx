import React, {useContext, useEffect, useState} from 'react';
import SaveService from '../service/save-service';
import Loader from 'react-loader-spinner';
import SavedResults from './SavedResult';
import UserIdService from "../service/userId-token";
import DeleteContext from "./DeleteContext";

export default function Saved() {

    const [savedFlights, setSavedFlights] = useState('');     ///useState for user location API
    const [loadingSpinner, setLoadingSpinner] = useState(false);    ///useState for loading spinner
    let user_id = UserIdService.getIdToken();    ///useID info from login
    const deleteContext = useContext(DeleteContext);    ///declare delete context

    useEffect(() => {
            setLoadingSpinner(true);
            SaveService.getAllSaved(user_id)      ///get disaster and terror event data
                .then(response => {
                    setSavedFlights(response.data);
                    setLoadingSpinner(false);
                    deleteContext.setDeleteFlight(false);
                })
                .catch(error => console.log(error));
        }, [deleteContext.deleteFlight]
    );

    function loadResults(resultValues) {
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