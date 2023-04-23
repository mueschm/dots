"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listApps = void 0;
const listApps = ({ httpClient, }) => ({ page = 1, per_page = 25, with_projects = false, }) => {
    const path = '/apps';
    const params = { page, per_page, with_projects };
    const url = `${path}`;
    return httpClient.get(url, { params });
};
exports.listApps = listApps;
//# sourceMappingURL=list-apps.js.map