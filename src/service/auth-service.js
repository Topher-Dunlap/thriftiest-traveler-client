import config from '../config'
import TokenService from "./token-service";

const AuthService = {

    postLogin(credentials) {
        return fetch(`${config.API_ENDPOINT}/account/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(credentials),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postUser(user) {
        return fetch(`${config.API_ENDPOINT}/account/create`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            }, body: JSON.stringify(user),
        }).then(res =>
            (!res.ok) ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },

}

export default AuthService