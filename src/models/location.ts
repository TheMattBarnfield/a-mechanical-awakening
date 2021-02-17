import type { Document } from '@contentful/rich-text-types';
import type EntryRef from './entryRef';

export default interface Location {
    id: string;
    name: string;
    description: string;
    pictureUrl: string;
    articleHtml: string;
    locatedIn: EntryRef;
}

export interface ContentfulLocation {
    id: string;
    name: string;
    description: string;
    picture: any;
    article: Document;
    locatedIn?: {
      sys: {
        id: string
      }
    }
}
