const axios = require('axios');

const DealsService = {

    getDeals(event) {
        const config = {
            method: 'post',
            url: `http://localhost:8000/event/deals`,
            data: JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return axios(config)
    },
}

export default DealsService;
