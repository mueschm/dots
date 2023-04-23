import { IResponse, IContext } from '../../types';
import { AppDeploymentLogType } from '..';
export interface IGetAggregatedAppDeploymentLogsApiResponse {
    historic_urls: string[];
    live_url: string;
}
export interface IGetAggregatedAppDeploymentLogsApiRequest {
    app_id: string;
    component_name?: string;
    deployment_id: string;
    follow?: boolean;
    pod_connection_timeout?: string;
    type?: AppDeploymentLogType | string;
}
export type GetAggregatedAppDeploymentLogsResponse = IResponse<IGetAggregatedAppDeploymentLogsApiResponse>;
export declare const getAggregatedAppDeploymentLogs: ({ httpClient, }: IContext) => ({ app_id, component_name, deployment_id, follow, pod_connection_timeout, type, }: IGetAggregatedAppDeploymentLogsApiRequest) => Promise<Readonly<GetAggregatedAppDeploymentLogsResponse>>;
