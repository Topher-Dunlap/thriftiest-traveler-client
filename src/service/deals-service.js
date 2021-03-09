const axios = require('axios');

const DealsService = {

    getDeals() {
        const config = {
            method: 'get',
            url: `http://localhost:8000/event/deals`,
        };
        return axios(config)
    },
}

export default DealsService;
