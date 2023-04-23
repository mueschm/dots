"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDropletFreeMemoryMetrics = void 0;
const getDropletFreeMemoryMetrics = ({ httpClient, }) => ({ end, host_id, start, }) => {
    const path = '/monitoring/metrics/droplet/memory_free';
    const query_params = {
        end,
        host_id,
        start,
    };
    return httpClient.get(path, { params: query_params });
};
exports.getDropletFreeMemoryMetrics = getDropletFreeMemoryMetrics;
//# sourceMappingURL=get-droplet-free-memory-metrics.js.map