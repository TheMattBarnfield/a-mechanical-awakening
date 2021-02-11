import type { Document } from '@contentful/rich-text-types';

export default interface Npc {
    id: string;
    name: string;
    description: string;
    pictureUrl: string;
    articleHtml: string;
}


export interface ContentfulNpc {
    id: string;
    name: string;
    description: string;
    picture: any;
    article: Document;
}
