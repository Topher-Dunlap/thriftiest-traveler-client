import configFile from '../config'
const axios = require('axios');

const DealsService = {

    getDeals(event) {
        const config = {
            method: 'post',
            url: `${configFile.API_ENDPOINT}/event/deals`,
            data: JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return axios(config)
    },
}

export default DealsService;
