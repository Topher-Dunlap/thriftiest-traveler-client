import config from '../config';

const UserIdService = {

	saveIDToken(user_id) {
		window.localStorage.setItem(config.USER_ID, user_id);
	},
	getIdToken() {
		return window.localStorage.getItem(config.USER_ID);
	},
	clearIdToken() {
		window.localStorage.removeItem(config.USER_ID);
	},
};

export default UserIdService;