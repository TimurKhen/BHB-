"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const injecter_js_1 = require("../Core/Injecter/injecter.js");
const http_js_1 = require("../Core/Http/http.js");
class HttpClient {
    constructor() {
        this.http = (0, injecter_js_1.inject)(http_js_1.http);
        this.masterUrl = 'https://jsonplaceholder.typicode.com/users';
    }
    getAllData() {
        return this.http.get(`${this.masterUrl}`, {});
    }
}
exports.HttpClient = HttpClient;
