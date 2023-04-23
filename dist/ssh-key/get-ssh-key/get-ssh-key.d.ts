import { IResponse, IContext } from '../../types';
import { ISshKey } from '..';
export interface IGetSshKeyApiResponse {
    ssh_key: ISshKey;
}
export interface IGetSshKeyApiRequest {
    ssh_key_id: string | number;
}
export type GetSshKeyResponse = IResponse<IGetSshKeyApiResponse>;
export declare const getSshKey: ({ httpClient, }: IContext) => ({ ssh_key_id, }: IGetSshKeyApiRequest) => Promise<Readonly<GetSshKeyResponse>>;
