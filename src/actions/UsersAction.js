import {REQUEST_GET_USERS,REQUEST_GET_USERS_FAILED,REQUEST_GET_USERS_SUCCESS} from '../constants/ActionUsers'
export function fetchUserRequest() {
    return {
        type: REQUEST_GET_USERS,
    };
}

export function fetchUserRequestSuccess(data) {
    return {
        type: REQUEST_GET_USERS_SUCCESS,
        data
    };
}

export function fetchUserRequestFailed(message) {
    return {
        type: REQUEST_GET_USERS_SUCCESS,
        message
    };
}
