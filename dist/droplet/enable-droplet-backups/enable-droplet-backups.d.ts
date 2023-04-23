import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';
export interface IEnableDropletBackupsApiResponse {
    action: IAction;
}
export interface IEnableDropletBackupsApiRequest {
    droplet_id: number;
}
export type EnableDropletBackupsResponse = IResponse<IEnableDropletBackupsApiResponse>;
export declare const enableDropletBackups: ({ httpClient, }: IContext) => ({ droplet_id, }: IEnableDropletBackupsApiRequest) => Promise<Readonly<EnableDropletBackupsResponse>>;
