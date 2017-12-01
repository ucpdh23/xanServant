
import { Component, OnInit } from '@angular/core';
import { NewsSummary } from '../../shared/news-summary.type'
import { NewsType } from '../../shared/news-type.enum'

import { NewsService } from '../../shared/news.service'

@Component({
    selector: 'news-list',
    templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit {
    publicNews: NewsSummary[];
    privateNews: NewsSummary[];

    constructor(private newsService: NewsService) { }


    ngOnInit() {
        this.newsService.getNewsSummaries()
            .then(news => {
                this.publicNews = news.filter(n => n.type == NewsType.Public);
                this.privateNews = news.filter(n => n.type == NewsType.Private);
            });
    }
}
