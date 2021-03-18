import configFile from '../config';
const axios = require('axios');

const ComponentMountService = {

	getEvents() {
		const config = {
			method: 'get',
			url: `${configFile.API_ENDPOINT}/event/`,
		};
		return axios(config);
	},

	getUserLocation() {
		const config = {
			method: 'get',
			url: 'https://ipapi.co/json',
		};
		return axios(config);
	},

	getUserAirport(input) {
		const config = {
			method: 'get',
			url: `${configFile.API_ENDPOINT}/event/userAirport?userCity=${input}`,
		};
		return axios(config);
	},
};

export default ComponentMountService;
