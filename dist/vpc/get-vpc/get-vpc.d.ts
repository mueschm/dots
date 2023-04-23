import { IResponse, IContext } from '../../types';
import { IVpc } from '..';
export interface IGetVpcApiResponse {
    vpc: IVpc;
}
export interface IGetVpcApiRequest {
    vpc_id: string;
}
export type GetVpcResponse = IResponse<IGetVpcApiResponse>;
export declare const getVpc: ({ httpClient, }: IContext) => ({ vpc_id, }: IGetVpcApiRequest) => Promise<Readonly<GetVpcResponse>>;
