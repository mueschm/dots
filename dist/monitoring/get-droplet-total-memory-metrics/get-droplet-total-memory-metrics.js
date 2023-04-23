"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDropletTotalMemoryMetrics = void 0;
const getDropletTotalMemoryMetrics = ({ httpClient, }) => ({ end, host_id, start, }) => {
    const path = '/monitoring/metrics/droplet/memory_total';
    const query_params = {
        end,
        host_id,
        start,
    };
    return httpClient.get(path, { params: query_params });
};
exports.getDropletTotalMemoryMetrics = getDropletTotalMemoryMetrics;
//# sourceMappingURL=get-droplet-total-memory-metrics.js.map