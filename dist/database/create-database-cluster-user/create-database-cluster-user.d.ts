import { IResponse, IContext } from '../../types';
import { IDatabaseClusterUser, IDatabaseClusterMysqlUserSettings } from '../types';
export interface ICreateDatabaseClusterUserApiResponse {
    user: IDatabaseClusterUser;
}
export interface ICreateDatabaseClusterUserApiRequest {
    database_cluster_id: string;
    user_name: string;
    mysql_settings?: IDatabaseClusterMysqlUserSettings;
}
export type CreateDatabaseClusterUserResponse = IResponse<ICreateDatabaseClusterUserApiResponse>;
export declare const createDatabaseClusterUser: ({ httpClient, }: IContext) => ({ database_cluster_id, mysql_settings, user_name, }: ICreateDatabaseClusterUserApiRequest) => Promise<Readonly<CreateDatabaseClusterUserResponse>>;
