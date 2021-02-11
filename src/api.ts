import type Npc from './models/npc';
import type {ContentfulNpc} from './models/npc';
import {default as axios} from 'axios';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
//
// const client = contentful.createClient({
//     space: '6hzlnplv14jn',
//     accessToken: 'NREbqEcYgXbVfscMkH1ASy8l5JVlrhpnG_anAUmrHqk'
// });
//
//
// export async function getNpc(id: string): Promise<Npc> {
//     const entries = await client.getEntries<ContentfulNpc>({
//         'content_type': 'npc',
//         'fields.id': id
//     });
//
//     const entry = entries.items[0].fields;
//     const pictureUrl = await getImageUrl(entry.picture.sys.id);
//     const articleHtml = documentToHtmlString(entry.article)
//
//     return {
//         ...entry,
//         pictureUrl,
//         articleHtml
//     }
// }

const cdnUrl = "https://cdn.contentful.com/spaces/6hzlnplv14jn/environments/master"
//
// // this is read-only, no need to keep secure seeing as we're exposing everything publicly anyway
const accessQuery = "access_token=NREbqEcYgXbVfscMkH1ASy8l5JVlrhpnG_anAUmrHqk"

export async function getNpc(id: string): Promise<Npc> {
    const response = await axios.get(`${cdnUrl}/entries?${accessQuery}&content_type=npc&fields.id=${encodeURI(id)}`)

    const npcResponse: ContentfulNpc = response.data.items.map(res => res.fields)[0];
    const pictureUrl = await getImageUrl(npcResponse.picture.sys.id);
    const articleHtml = documentToHtmlString(npcResponse.article)

    return {
        ...npcResponse,
        pictureUrl,
        articleHtml
    }
}

async function getImageUrl(id: string): Promise<string> {
    const response = await axios.get(`${cdnUrl}/assets/${id}?${accessQuery}`)
    return response.data.fields.file.url
}
