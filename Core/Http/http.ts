import {getRequest, postRequest, putRequest} from "./requests/requests";

export class http {
    async get(url: string, headers: object) {
        return getRequest(url, headers)
    }

    async post(url: string, body: any, headers: object) {
        return postRequest(url, body, headers)
    }

    async put(url: string, body: any, headers: object) {
        return putRequest(url, body, headers)
    }
}