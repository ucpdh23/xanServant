
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NewsSummary } from '../../shared/news-summary.type'
import { NewsType } from '../../shared/news-type.enum'

@Component({
    selector: 'news-summary',
    templateUrl: './news-summary.component.html'
})
export class NewsSummaryComponent {
    @Input() newsSummary: NewsSummary;

    constructor(private router: Router) {
        this.router = router;
    }

    navigateToDetail() {
        this.router.navigate(["detail", "12345"]);
    }
}
