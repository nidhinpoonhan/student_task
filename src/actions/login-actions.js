import { LOGIN } from "../constants/action-types";
import { credential } from '../constants/data';
import cookie from "../utils/Cookie";
export function loginRequest(username, password) {
    return (dispatch) => {
        dispatch({ type: LOGIN.PENDING });
        return validateEmail(username, password)
            .then((repose) => {
                dispatch({ type: LOGIN.SUCCESS });
                return repose;
            })
            .catch((error) => {
                dispatch({ type: LOGIN.ERROR });
                return error;
            });
    }
}

function validateEmail(username, password) {
    return new Promise(function (resolve, reject) {
        if (username.toLowerCase() === credential.username.toLowerCase() && password === credential.password) {
            cookie.set('username', username);
            cookie.set('password', password);
            resolve(true)
        } else {
            reject(false);
        }
    });
};