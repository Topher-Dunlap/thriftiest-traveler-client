import config from '../config'
const axios = require('axios');
const API_ENDPOINT = config.API_ENDPOINT

const SaveService = {

    saveFlight(flight) {
        return fetch(`${API_ENDPOINT}/save/`, {
            method: 'POST',
            body: JSON.stringify(flight),
            headers: {
                'content-type': 'application/json',
                // 'authorization': `bearer ${config.API_KEY}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    // get the error message from the response,
                    return res.json().then(error => {
                        // then throw it
                        throw error
                    })
                }
                return res.json()
            })
            .catch(error => {
                console.log("save flight post error: ", {error})
            })
    },

    getAllSaved(user_id){
        const config = {
            method: 'GET',
            url: `${API_ENDPOINT}/save/`,
            headers: {
                'user_id': user_id
            }
        };
        return axios(config)
    },

    deleteSavedFlight(user_id, flight_id){
        const config = {
            method: 'DELETE',
            url: `${API_ENDPOINT}/save/${flight_id}`,
            headers: {
                'user_id': user_id
            }
        };
        return axios(config)
    }

}

export default SaveService;
