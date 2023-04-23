import { IResponse, IContext } from '../../types';
export interface IRetryDropletDestroyApiRequest {
    droplet_id: number;
}
export type RetryDropletDestroyResponse = IResponse<void>;
export declare const retryDropletDestroy: ({ httpClient, }: IContext) => ({ droplet_id, }: IRetryDropletDestroyApiRequest) => Promise<Readonly<RetryDropletDestroyResponse>>;
