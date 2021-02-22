import type Npc from './models/npc';
import type Location from './models/location';
import type EntryRef from './models/entryRef';
import type {ContentfulNpc} from './models/npc';
import type {ContentfulLocation} from './models/location';
import {default as axios} from 'axios';
import type {SearchResult} from './models/searchResult';
import {basepath, getEntryUrl} from './routing';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { INLINES } from '@contentful/rich-text-types';

interface ContentfulResponse<T> {
    items: ContentfulItem<T>[]
    includes: Includes
}

interface ContentfulItem<T> {
    sys: {
        id: string;
        contentType: ContentfulItem<any>
    };
    fields: T;
}

interface Includes {
    Entry: ContentfulItem<any>[];
    Asset: ContentfulItem<any>[];
}

type EntryType = 'npc' | 'location';

const cdnUrl = "https://cdn.contentful.com/spaces/6hzlnplv14jn/environments/master"

// this is read-only, no need to keep secure seeing as we're exposing everything publicly anyway
const accessToken = "NREbqEcYgXbVfscMkH1ASy8l5JVlrhpnG_anAUmrHqk"

export async function getNpc(id: string): Promise<Npc> {
    const {items, includes} = await getContentfulEntry('npc', id);
    const npcResponse = items[0].fields;
    const pictureUrl = await getImageUrl(includes, npcResponse.picture.sys.id);
    const articleHtml = parseArticleToHtml(includes, npcResponse.article);

    return {
        ...npcResponse,
        pictureUrl,
        articleHtml
    }
}

export async function getLocation(id: string): Promise<Location> {
    const {items, includes} = await getContentfulEntry('location', id);
    const locationResponse = items[0].fields;

    const pictureUrl = await getImageUrl(includes, locationResponse.picture.sys.id);
    const articleHtml = parseArticleToHtml(includes, locationResponse.article)
    const locatedIn = locationResponse.locatedIn && getIncludedEntryId(includes, locationResponse.locatedIn.sys.id);

    return {
        ...locationResponse,
        pictureUrl,
        articleHtml,
        locatedIn
    }
}

async function getContentfulEntry(type: 'npc', id: string): Promise<ContentfulResponse<ContentfulNpc>>
async function getContentfulEntry(type: 'location', id: string): Promise<ContentfulResponse<ContentfulLocation>>
async function getContentfulEntry(type: EntryType, id: string): Promise<ContentfulResponse<unknown>> {
    const response = await axios.get(`${cdnUrl}/entries`, {
        params: {
            "access_token": accessToken,
            "content_type": type,
            "fields.id": encodeURI(id),
            "limit": 1
        }
    });
    return response.data;
}

export async function getAllNpcs(): Promise<SearchResult[]> {
    const response = await axios.get(`${cdnUrl}/entries`, {
        params: {
            "access_token": accessToken,
            "content_type": "npc",
            "order": "fields.name"
        }
    });

    const {items, includes} = response.data;

    return Promise.all(items.map(res => ({
        pageUrl: getEntryUrl(res.sys.contentType.sys.id, res.fields.id),
        title: res.fields.name,
        subtitle: res.fields.description,
        pictureUrl: getImageUrl(includes, res.fields.picture.sys.id)
    })));
}

export async function search(term: string): Promise<SearchResult[]> {
    if (term.length < 3) {
        return []
    }
    const response = await axios.get(`${cdnUrl}/entries`, {
        params: {
            "access_token": accessToken,
            "query": term,
            "limit": 5
        }
    });

    const {items, includes} = response.data;

    return Promise.all(items.map(res => ({
        pageUrl: getEntryUrl(res.sys.contentType.sys.id, res.fields.id),
        title: res.fields.name,
        subtitle: res.fields.description,
        pictureUrl: getImageUrl(includes, res.fields.picture.sys.id)
    })));
}

function getImageUrl(includes: Includes, imageId: string): string {
    const imageAsset = includes.Asset.filter(asset => asset.sys.id === imageId)[0];
    return imageAsset.fields.file.url;
}

function parseArticleToHtml(includes: Includes, article: any): string {
    return documentToHtmlString(article, {
        renderNode: {
            [INLINES.ENTRY_HYPERLINK]: (node) => {
                const {type, id} = getIncludedEntryId(includes, node.data.target.sys.id)
                return `<a href="${getEntryUrl(type, id)}">${node.content[0].value}</a>`
            }
        }
    });
}

function getIncludedEntryId(includes: Includes, entryId: string): EntryRef {
    const entry = includes.Entry.filter(entry => entry.sys.id === entryId)[0];
    return {
        type: entry.sys.contentType.sys.id,
        id: entry.fields.id,
        text: entry.fields.name
    }
}
