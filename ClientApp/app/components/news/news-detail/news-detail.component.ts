
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'news-detail',
    templateUrl: './news-detail.component.html'
})
export class NewsDetailComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        // subscribe to router event
        this.activatedRoute.params.subscribe((params: Params) => {
            let id = params['id'];
            alert(id);
        });
    }
}
