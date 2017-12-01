import { NewsSummary } from './news-summary.type'
import { NewsType } from './news-type.enum'
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {
    constructor(private http: Http) { }

    getNewsSummaries() {
        return this.http.get("api/News/GetNewsSummaries")
            .map(response => response.json() as NewsSummary[])
            .toPromise();

    }
}