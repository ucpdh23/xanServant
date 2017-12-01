import { NewsType } from './news-type.enum'

export class NewsSummary {
    newsNumber: string;
    type: NewsType;
    name: string;
    date: Date;
}