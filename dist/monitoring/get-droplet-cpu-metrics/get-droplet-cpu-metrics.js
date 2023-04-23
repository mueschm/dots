"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDropletCpuMetrics = void 0;
const getDropletCpuMetrics = ({ httpClient, }) => ({ end, host_id, start, }) => {
    const path = '/monitoring/metrics/droplet/cpu';
    const query_params = {
        end,
        host_id,
        start,
    };
    return httpClient.get(path, { params: query_params });
};
exports.getDropletCpuMetrics = getDropletCpuMetrics;
//# sourceMappingURL=get-droplet-cpu-metrics.js.map