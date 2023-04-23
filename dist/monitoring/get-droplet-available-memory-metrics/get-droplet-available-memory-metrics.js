"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDropletAvailableMemoryMetrics = void 0;
const getDropletAvailableMemoryMetrics = ({ httpClient, }) => ({ end, host_id, start, }) => {
    const path = '/monitoring/metrics/droplet/memory_available';
    const query_params = {
        end,
        host_id,
        start,
    };
    return httpClient.get(path, { params: query_params });
};
exports.getDropletAvailableMemoryMetrics = getDropletAvailableMemoryMetrics;
//# sourceMappingURL=get-droplet-available-memory-metrics.js.map