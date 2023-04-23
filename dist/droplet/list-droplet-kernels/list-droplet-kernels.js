"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDropletKernels = void 0;
const listDropletKernels = ({ httpClient, }) => ({ droplet_id, page = 1, per_page = 25, }) => {
    const path = '/droplets';
    const query_params = { page, per_page };
    const url = `${path}/${droplet_id}/kernels`;
    return httpClient.get(url, {
        params: query_params,
    });
};
exports.listDropletKernels = listDropletKernels;
//# sourceMappingURL=list-droplet-kernels.js.map