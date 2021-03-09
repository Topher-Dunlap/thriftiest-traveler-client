const axios = require('axios');

const ComponentMountService = {

    getEvents() {
        const config = {
            method: 'get',
            url: `http://localhost:8000/event/`,
        };
        return axios(config)
    },

    getUserLocation() {
        const config = {
            method: 'get',
            url: `http://ip-api.com/json/`,
        };
        return axios(config)
    },

    getUserAirport(input) {
        const config = {
            method: 'get',
            url: `http://localhost:8000/event/userAirport?userCity=${input}`,
        };
        return axios(config)
    },
}

export default ComponentMountService;
