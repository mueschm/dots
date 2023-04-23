import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';
export interface IPowerOnDropletApiResponse {
    action: IAction;
}
export interface IPowerOnDropletApiRequest {
    droplet_id: number;
}
export type PowerOnDropletResponse = IResponse<IPowerOnDropletApiResponse>;
export declare const powerOnDroplet: ({ httpClient, }: IContext) => ({ droplet_id, }: IPowerOnDropletApiRequest) => Promise<Readonly<PowerOnDropletResponse>>;
