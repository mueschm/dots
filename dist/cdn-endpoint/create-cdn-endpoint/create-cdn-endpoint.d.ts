import { IResponse, IContext } from '../../types';
import { ICdnEndpoint } from '..';
export interface ICreateCdnEndpointApiResponse {
    endpoint: ICdnEndpoint;
}
export interface ICreateCdnEndpointApiRequest {
    origin: string;
    ttl?: number;
    certificate_id?: string;
    custom_domain?: string;
}
export type CreateCdnEndpointResponse = IResponse<ICreateCdnEndpointApiResponse>;
export declare const createCdnEndpoint: ({ httpClient, }: IContext) => ({ origin, ttl, certificate_id, custom_domain, }: ICreateCdnEndpointApiRequest) => Promise<Readonly<CreateCdnEndpointResponse>>;
