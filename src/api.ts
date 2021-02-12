import type Npc from './models/npc';
import type {ContentfulNpc} from './models/npc';
import {default as axios} from 'axios';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type {SearchResult} from './models/searchResult';
import {basepath} from './routing';

interface ContentfulResponse<T> {
    items: ContentfulItem<ContentfulNpc>[]
    includes: any
}

interface ContentfulItem<T> {
    fields: T
}

const cdnUrl = "https://cdn.contentful.com/spaces/6hzlnplv14jn/environments/master"

// this is read-only, no need to keep secure seeing as we're exposing everything publicly anyway
const accessQuery = "access_token=NREbqEcYgXbVfscMkH1ASy8l5JVlrhpnG_anAUmrHqk"

export async function getNpc(id: string): Promise<Npc> {
    const response = await axios.get(`${cdnUrl}/entries?${accessQuery}&content_type=npc&fields.id=${encodeURI(id)}&limit=1`)
    const {items, includes}: ContentfulResponse<ContentfulNpc> = response.data;
    const npcResponse: ContentfulNpc = items[0].fields;


    const pictureUrl = await getImageUrl(includes, npcResponse.picture.sys.id);
    const articleHtml = documentToHtmlString(npcResponse.article)

    return {
        ...npcResponse,
        pictureUrl,
        articleHtml
    }
}

export async function search(term: string): Promise<SearchResult[]> {
    if (term.length < 3) {
        return []
    }
    const response = await axios.get(`${cdnUrl}/entries?${accessQuery}&query=${term}&limit=5`);

    const {items, includes} = response.data

    // TODO: Get the content type for URL
    return Promise.all(items.map(res => ({
        pageUrl: `${basepath}/npc/${res.fields.id}`,
        title: res.fields.name,
        subtitle: res.fields.description,
        pictureUrl: getImageUrl(includes, res.fields.picture.sys.id)
    })));
}

function getImageUrl(includes: any, imageId: string): string {
    const imageAsset = includes.Asset.filter(asset => asset.sys.id === imageId)[0];
    return imageAsset.fields.file.url;
}
