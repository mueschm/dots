"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDockerCredentials = void 0;
const getDockerCredentials = ({ httpClient, }) => ({ can_write = false, expiry_seconds, }) => {
    const path = '/registry/docker-credentials';
    const query_params = {
        expiry_seconds,
        read_write: can_write,
    };
    const url = `${path}`;
    return httpClient.get(url, { params: query_params });
};
exports.getDockerCredentials = getDockerCredentials;
//# sourceMappingURL=get-docker-credentials.js.map