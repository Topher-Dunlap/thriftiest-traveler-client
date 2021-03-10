import React, { useEffect, useState} from 'react';
// import IconButton from '@material-ui/core/IconButton';
// import {BsFilter} from "react-icons/bs";
// import {FaGlobeAsia} from "react-icons/fa";
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
        console.log("flightDeals: ", flightDeals)
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
            {/*<IconButton aria-label="delete" style={filterIcon}>*/}
            {/*    <BsFilter*/}
            {/*        size={25}/>*/}
            {/*</IconButton>*/}
            {/*<IconButton aria-label="delete" style={globeIcon}>*/}
            {/*    <FaGlobeAsia*/}
            {/*        size={25}/>*/}
            {/*</IconButton>*/}
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

// const filterIcon = {
//     float: "right",
//     padding: "10px",
//     margin: "1rem 12% 2rem 0",
// }
//
// const globeIcon = {
//     float: "right",
//     padding: "10px",
//     margin: "1rem .5rem 2rem 0",
// }
