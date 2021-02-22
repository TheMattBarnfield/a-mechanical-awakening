// coupled with 404.html and index.html
export const basepath = '/a-mechanical-awakening';

export function getEntryUrl(type: EntryType, id: string) {
    return `${basepath}/#/${type}/${id}`;
}
