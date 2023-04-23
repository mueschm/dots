"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const createApp = ({ httpClient, }) => ({ project_id, spec, }) => {
    const path = '/apps';
    const body = { project_id, spec };
    const url = `${path}`;
    return httpClient.post(url, body);
};
exports.createApp = createApp;
//# sourceMappingURL=create-app.js.map