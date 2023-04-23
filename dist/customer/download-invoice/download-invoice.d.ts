/// <reference types="node" />
import { IResponse, IContext } from '../../types';
import { Stream } from 'stream';
export type DownloadInvoiceResponse = IResponse<Stream>;
export interface IDownloadInvoiceApiRequest {
    invoice_uuid: string;
    format: 'csv' | 'pdf' | string;
}
export declare const downloadInvoice: ({ httpClient, }: IContext) => ({ invoice_uuid, format, }: IDownloadInvoiceApiRequest) => Promise<Readonly<DownloadInvoiceResponse>>;
