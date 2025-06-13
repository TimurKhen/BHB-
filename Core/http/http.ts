import {getRequest, postRequest, putRequest} from "./requests/requests";

export class http {
    async get(url, headers) {
        return getRequest(url, headers)
    }

    async post(url, body, headers) {
        return postRequest(url, body, headers)
    }

    async put(url, body, headers) {
        return putRequest(url, body, headers)
    }
}