import { IResponse, IContext } from '../../types';
export interface IDeleteTagApiRequest {
    tag_name: string;
}
export type DeleteTagResponse = IResponse<void>;
export declare const deleteTag: ({ httpClient, }: IContext) => ({ tag_name, }: IDeleteTagApiRequest) => Promise<Readonly<DeleteTagResponse>>;
