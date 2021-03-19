import React, {useEffect, useState} from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import NavRoutes from '../components/NavRoutes';
import ComponentMountService from '../service/componentMount-service';
import AuthContext from '../components/AuthContext';
import DeleteContext from '../components/DeleteContext';
import EventContext from '../components/EventContext';
import ErrorContext from '../components/ErrorContext';

function App() {

    ///useState for user location API
    const [userAirport, setUserAirport] = useState('');

    const [eventData, setEventData] = useState([]);
    const eventContext = {eventData: eventData};

    const [loggedIn, setLoggedIn] = useState(false);
    const contextAuth = {
        loggedIn: loggedIn,
        setLoggedIn: setLoggedIn,
    };

    const [deleteFlight, setDeleteFlight] = useState(false);
    const contextDelete = {
        deleteFlight: deleteFlight,
        setDeleteFlight: setDeleteFlight
    };

    const [errorState, setErrorState] = useState([]);
    const contextError = {
        errorState: errorState,
        setErrorState: setErrorState
    };

    useEffect(() => {
            ///get user location
            ComponentMountService.getUserLocation()
                .then(locationResponse => {
                    ComponentMountService.getUserAirport(locationResponse.data.city)
                        .then(airportDataResponse => {
                            setUserAirport(airportDataResponse.data);
                        })
                        .catch(error => setErrorState(error));
                })
                .catch(error => setErrorState(error));
        }, [userAirport]
    );

    return (
            <AuthContext.Provider value={contextAuth}>
                <DeleteContext.Provider value={contextDelete}>
                    <EventContext.Provider value={eventContext}>
                        <ErrorContext.Provider value={contextError}>
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
                        </ErrorContext.Provider>
                    </EventContext.Provider>
                </DeleteContext.Provider>
            </AuthContext.Provider>
    );
}

export default App;
