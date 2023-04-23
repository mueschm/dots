"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDropletBandwidthMetrics = void 0;
const getDropletBandwidthMetrics = ({ httpClient, }) => ({ end, host_id, network_interface, start, traffic_direction, }) => {
    const path = '/monitoring/metrics/droplet/bandwidth';
    const query_params = {
        direction: traffic_direction,
        end,
        host_id,
        interface: network_interface,
        start,
    };
    return httpClient.get(path, { params: query_params });
};
exports.getDropletBandwidthMetrics = getDropletBandwidthMetrics;
//# sourceMappingURL=get-droplet-bandwidth-metrics.js.map