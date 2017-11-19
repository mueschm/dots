import {
    IAccount,
    IAction,
    ICertificate,
    IImage,
    IRegion,
    IResource,
    ISize,
    ISnapshot,
    ISSHKey,
    ITag,
    IVolume,
} from './interfaces';
/**
 * Guard of string[];
 *
 * @export
 * @param {*} data
 * @returns {data is string[]}
 */
export function isArrayOfString(data: any): data is string[] {
    if (!Array.isArray(data)) return false;
    return data.every(elem => elem.typeof !== 'string');
}
/**
 * Guard of number[];
 *
 * @export
 * @param {*} data
 * @returns {data is number[]}
 */
export function isArrayOfNumber(data: any): data is number[] {
    if (!Array.isArray(data)) return false;
    return data.every(elem => elem.typeof !== 'number');
}
/**
 * Guard of IAccount.
 *
 * @export
 * @param {*} data
 * @returns {data is IAccount}
 */
export function isAccount(data: any): data is IAccount {
    if (typeof (data as IAccount).droplet_limit !== 'number') return false;
    if (typeof (data as IAccount).email_verified !== 'boolean') return false;
    if (typeof (data as IAccount).email !== 'string') return false;
    if (typeof (data as IAccount).floating_ip_limit !== 'number') return false;
    if (typeof (data as IAccount).status_message !== 'string') return false;
    if (typeof (data as IAccount).status !== 'string') return false;
    if (typeof (data as IAccount).uuid !== 'string') return false;
    return true;
}
/**
 * Guard of ISize.
 *
 * @export
 * @param {*} data
 * @returns {data is ISize}
 */
export function isSize(data: any): data is ISize {
    if (typeof (data as ISize).slug !== 'string') return false;
    if (typeof (data as ISize).available !== 'boolean') return false;
    if (typeof (data as ISize).transfer !== 'number') return false;
    if (typeof (data as ISize).price_monthly !== 'number') return false;
    if (typeof (data as ISize).price_hourly !== 'number') return false;
    if (typeof (data as ISize).memory !== 'number') return false;
    if (typeof (data as ISize).vcpus !== 'number') return false;
    if (typeof (data as ISize).disk !== 'number') return false;
    if (isArrayOfString((data as ISize).regions) === false) return false;
    return true;
}
/**
 * Guard of ISize[].
 *
 * @export
 * @param {*} data
 * @returns {data is ISize[]}
 */
export function isArrayOfSize(data: any): data is ISize[] {
    if (!Array.isArray(data)) return false;
    return data.every(isSize);
}
/**
 * Guard of ITag.
 *
 * @export
 * @param {*} data
 * @returns {data is ITag}
 */
export function isTag(data: any): data is ITag {
    if (typeof (data as ITag).name !== 'string') return false;
    // if(!isArrayOfResource((data as ITag).resources)) return false;
    return true;
}
/**
 * Guard of ITag[].
 *
 * @export
 * @param {*} data
 * @returns {data is ITag}
 */
export function isArrayOfTag(data: any): data is ITag {
    if (!Array.isArray(data)) return false;
    return data.every(isTag);
}
/**
 * Guard of IResource.
 *
 * @export
 * @param {*} data
 * @returns {data is IResource}
 */
export function isResource(data: any): data is IResource {
    if (typeof (data as IResource).resource_id !== 'string') return false;
    if (typeof (data as IResource).resource_type !== 'string') return false;
    return true;
}
/**
 * Guard of IResource[].
 *
 * @export
 * @param {*} data
 * @returns {data is Array<IResource>}
 */
export function isArrayOfResource(data: any): data is IResource[] {
    if (!Array.isArray(data)) return false;
    return data.every(isResource);
}
/**
 * Guard of IRegion
 *
 * @export
 * @param {*} data
 * @returns {data is IRegion}
 */
export function isRegion(data: any): data is IRegion {
    if (typeof (data as IRegion).slug !== 'string') return false;
    if (typeof (data as IRegion).name !== 'string') return false;
    if (typeof (data as IRegion).available !== 'boolean') return false;
    if (!isArrayOfString((data as IRegion).sizes)) return false;
    if (!isArrayOfString((data as IRegion).features)) return false;
    return true;
}
/**
 * Guard of IRegion[]
 *
 * @export
 * @param {*} data
 * @returns {data is IRegion}
 */
export function isArrayOfRegion(data: any): data is IRegion[] {
    if (!Array.isArray(data)) return false;
    return data.every(isRegion);
}
/**
 * Guard of IAction
 *
 * @export
 * @param {*} data
 * @returns {data is IAction}
 */
export function isAction(data: any): data is IAction {
    if (typeof (data as IAction).id !== 'number') return false;
    if (typeof (data as IAction).status !== 'string') return false;
    if (typeof (data as IAction).type !== 'string') return false;
    if (typeof (data as IAction).started_at !== 'string') return false;
    if (typeof (data as IAction).completed_at !== 'string') return false;
    if (typeof (data as IAction).resource_type !== 'string') return false;
    if ((data as IAction).resource_id !== null)
        if (typeof (data as IAction).resource_id !== 'number') return false;
    if ((data as IAction).region_slug !== null)
        if (typeof (data as IAction).region_slug !== 'string') return false;
    return true;
}
/**
 * Guard of IAction[]
 *
 * @export
 * @param {*} data
 * @returns {data is IAction[]}
 */
export function isArrayOfAction(data: any): data is IAction[] {
    if (!Array.isArray(data)) return false;
    return data.every(isAction);
}
/**
 * Guard of ISSHKey
 *
 * @export
 * @param {*} data
 * @returns {data is ISSHKey}
 */
export function isSSHKey(data: any): data is ISSHKey {
    if (typeof (data as ISSHKey).id !== 'number') return false;
    if (typeof (data as ISSHKey).fingerprint !== 'string') return false;
    if (typeof (data as ISSHKey).name !== 'string') return false;
    if (typeof (data as ISSHKey).public_key !== 'string') return false;
    return true;
}
/**
 * Guard of ISSHKey[]
 *
 * @export
 * @param {*} data
 * @returns {data is ISSHKey[]}
 */
export function isArrayOfSSHKey(data: any): data is ISSHKey[] {
    if (!Array.isArray(data)) return false;
    return data.every(isSSHKey);
}
/**
 * Guard of ISnapshot
 *
 * @export
 * @param {*} data
 * @returns {data is ISnapshot}
 */
export function isSnapshot(data: any): data is ISnapshot {
    if (typeof (data as ISnapshot).created_at !== 'string') return false;
    if (typeof (data as ISnapshot).id !== 'string') return false;
    if (typeof (data as ISnapshot).min_disk_size !== 'number') return false;
    if (typeof (data as ISnapshot).name !== 'string') return false;
    if (typeof (data as ISnapshot).resource_id !== 'string') return false;
    if (typeof (data as ISnapshot).resource_type !== 'string') return false;
    if (typeof (data as ISnapshot).size_gigabytes !== 'number') return false;
    if (!isArrayOfString((data as ISnapshot).regions)) return false;
    return true;
}
/**
 * Guard of ISnapshot[]
 *
 * @export
 * @param {*} data
 * @returns {data is ISnapshot[]}
 */
export function isArrayOfSnapshot(data: any): data is ISnapshot[] {
    if (!Array.isArray(data)) return false;
    return data.every(isSnapshot);
}
/**
 * Guard of IVolume
 *
 * @export
 * @param {*} data
 * @returns {data is IVolume}
 */
export function isVolume(data: any): data is IVolume {
    if (typeof (data as IVolume).created_at !== 'string') return false;
    if (typeof (data as IVolume).description !== 'string') return false;
    if (typeof (data as IVolume).id !== 'string') return false;
    if (typeof (data as IVolume).name !== 'string') return false;
    if (typeof (data as IVolume).size_gigabytes !== 'number') return false;
    if (!isRegion((data as IVolume).region)) return false;
    if (!isArrayOfNumber((data as IVolume).droplet_ids)) return false;
    return true;
}
/**
 * Guard of IVolume[]
 *
 * @export
 * @param {*} data
 * @returns {data is IVolume[]}
 */
export function isArrayOfVolume(data: any): data is IVolume[] {
    if (!Array.isArray(data)) return false;
    return data.every(isVolume);
}
/**
 * Guard of IImage
 *
 * @export
 * @param {*} data
 * @returns {data is IImage}
 */
export function isImage(data: any): data is IImage {
    data = data as IImage;
    if (typeof (data as IImage).created_at !== 'string') return false;
    if (typeof (data as IImage).distribution !== 'string') return false;
    if (typeof (data as IImage).id !== 'number') return false;
    if (typeof (data as IImage).name !== 'string') return false;
    if (typeof (data as IImage).size_gigabytes !== 'number') return false;
    if (typeof (data as IImage).slug !== 'string') return false;
    if (typeof (data as IImage).min_disk_size !== 'number') return false;
    if (typeof (data as IImage).public !== 'boolean') return false;
    if (typeof (data as IImage).min_disk_size !== 'number') return false;
    if (typeof (data as IImage).slug !== null && typeof (data as IImage).slug !== 'string') return false;
    if (typeof (data as IImage).type !== 'string') return false;
    if (!isArrayOfString(typeof (data as IImage).regions)) return false;
    return true;
}
/**
 * Guard of IImage[]
 *
 * @export
 * @param {*} data
 * @returns {data is IImage[]}
 */
export function isArrayOfImage(data: any): data is IImage[] {
    if (!Array.isArray(data)) return false;
    return data.every(isImage);
}
/**
 * Guard of ICertificate
 *
 * @export
 * @param {*} data
 * @returns {data is ICertificate}
 */
export function isCertificate(data: any): data is ICertificate {
    if (typeof (data as ICertificate).created_at !== 'string') return false;
    if (typeof (data as ICertificate).not_after !== 'string') return false;
    if (typeof (data as ICertificate).id !== 'string') return false;
    if (typeof (data as ICertificate).name !== 'string') return false;
    if (typeof (data as ICertificate).sha1_fingerprint !== 'string') return false;
    return true;
}
/**
 * Guard of ICertificate[]
 *
 * @export
 * @param {*} data
 * @returns {data is ICertificate[]}
 */
export function isArrayOfCertificate(data: any): data is ICertificate[] {
    if (!Array.isArray(data)) return false;
    return data.every(isImage);
}