import React, {useEffect, useState} from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import NavRoutes from '../components/NavRoutes';
import ComponentMountService from '../service/componentMount-service';
import ThemeContext from '../components/ThemeContext';
import AuthContext from '../components/AuthContext';
import DeleteContext from '../components/DeleteContext';
import EventContext from '../components/EventContext'

function App() {

    ///useState for user location API
    const [userAirport, setUserAirport] = useState('');

    ///useState for event data
    const [eventData, setEventData] = useState([]);
    const eventContext = {
        eventData: eventData
    }

    //login state //login context
    const [loggedIn, setLoggedIn] = useState(false);
    const contextAuth = {
        loggedIn: loggedIn,
        setLoggedIn: setLoggedIn,
    }

    ///useState for deleting saved flight
    const [deleteFlight, setDeleteFlight] = useState(false);
    const contextDelete = {
        deleteFlight: deleteFlight,
        setDeleteFlight: setDeleteFlight
    }

    useEffect(() => {
            ///get user location
            ComponentMountService.getUserLocation()
                .then(locationResponse => {
                    ComponentMountService.getUserAirport(locationResponse.data.city)
                        .then(airportDataResponse => {
                            setUserAirport(airportDataResponse.data)
                        })
                        .catch(error => console.log(error))
                })
                .catch(error => console.log(error))
        }, []
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            <AuthContext.Provider value={contextAuth}>
                <DeleteContext.Provider value={contextDelete}>
                    <EventContext.Provider value={eventContext}>
                        <main>
                            <NavBar/>
                            <div>
                                <ErrorBoundary>
                                    <NavRoutes
                                        userAirport={userAirport}/>
                                    <Footer/>
                                </ErrorBoundary>
                            </div>
                        </main>
                    </EventContext.Provider>
                </DeleteContext.Provider>
            </AuthContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;

const contextValue = {
    centerText: {
        textAlign: "center",
    },

    fontColor: {
        color: "white",
    },

    formInputStyle: {
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
    },

    formElementSpacing: {
        margin: "0px 10px",
        textAlign: "left",
    },

    formStyle: {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        margin: "4rem 4rem 6rem 4rem",
        padding: "1rem 2rem 2rem",
    },

    formButtonStyle: {
        width: "100%",
        backgroundColor: "#333029",
        color: "white",
        padding: "14px 20px",
        margin: "8px 0",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },

    navLinkStyle: {
        color: "white",
        textDecoration: "none",
    },

    resultsClearFloat: {
        clear: "left"
    },

    resultsWeatherMargin: {
        margin: "0 .5rem 0"
    },

    resultsLocationNameFloat: {
        margin: "2rem 2rem .5rem",
        // float: "left",
    },

    resultsTitleNameFloat: {
        margin: "0rem 2rem .5rem",
        float: "left",
        fontStyle: "italic",
    },

    resultsIconBookFloat: {
        float: "right",
        padding: "10px",
        margin: "2rem 2rem .5rem 0rem",
    },

    resultsIconFlight: {
        float: "right",
        padding: "10px",
        margin: "2rem .5rem 0 0",
    },

    resultsDescStyle: {
        margin: "2rem 2rem .5rem"
    },

    resultsHeaderStyle: {
        margin: "7rem 0 0 2rem",
        fontSize: "2.5rem",
    },

    resultsDateStyle: {
        margin: "0 0 0 2rem",
        fontStyle: "italic"
    },


    resultsImageStyle: {
        width: "100%",
        height: "100%",
        borderRadius: "5px 5px 0px 0px",
    },

    resultsDivAddressStyle: {
        display: "flex",
        textAlign: "left",
        padding: "0",
        margin: "3rem 2rem 0",
        height: "75%",
    },

    resultsStyle: {
        listStyleType: "none",
        textAlign: "left",
        padding: "2rem",
        margin: "4rem auto",
        height: "20%",
        width: "75%",
        borderRadius: "5px",
    },

    resultsDivStyle: {
        borderRadius: "5px",
        backgroundColor: "#FFFFFF",
        padding: "0 0 3rem",
        boxShadow:
            `0 2.8px 1.2px rgba(0, 0, 0, 0.034),
        0 6.7px 2.3px rgba(0, 0, 0, 0.048),
        0 12.5px 4px rgba(0, 0, 0, 0.06),
        0 22.3px 6.9px rgba(0, 0, 0, 0.072),
        0 41.8px 8.4px rgba(0, 0, 0, 0.086),
        0 100px 100px rgba(0, 0, 0, 0.12)`
    },
}