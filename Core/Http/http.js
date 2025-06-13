"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
const requests_1 = require("./requests/requests");
class http {
    get(url, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, requests_1.getRequest)(url, headers);
        });
    }
    post(url, body, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, requests_1.postRequest)(url, body, headers);
        });
    }
    put(url, body, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, requests_1.putRequest)(url, body, headers);
        });
    }
}
exports.http = http;
