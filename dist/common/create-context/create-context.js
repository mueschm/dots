"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
const createContext = ({ axios, requestTimeoutInMs = 1000 * 15, endpoint = 'https://api.digitalocean.com/v2', token, }) => {
    const headers = Object.freeze({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    });
    const axiosConfig = Object.freeze({
        baseURL: endpoint,
        headers,
        timeout: requestTimeoutInMs,
    });
    const httpClient = axios.create(axiosConfig);
    return Object.freeze({ endpoint, httpClient });
};
exports.createContext = createContext;
//# sourceMappingURL=create-context.js.map