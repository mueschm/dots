import { IResponse, IContext } from '../../types';
import { IVpc } from '..';
export interface IUpdateVpcApiResponse {
    vpc: IVpc;
}
export interface IUpdateVpcApiRequest {
    description?: string;
    is_default?: boolean;
    name?: string;
    vpc_id: string;
}
export type UpdateVpcResponse = IResponse<IUpdateVpcApiResponse>;
export declare const updateVpc: ({ httpClient, }: IContext) => ({ description, is_default, name, vpc_id, }: IUpdateVpcApiRequest) => Promise<Readonly<UpdateVpcResponse>>;
