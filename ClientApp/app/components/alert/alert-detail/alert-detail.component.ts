
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OnInit, Component, Input } from '@angular/core';

import { Alert } from '../../shared/alert.type'

import { AlertService } from '../../shared/alert.service'


@Component({
    selector: 'alert-detail',
    templateUrl: './alert-detail.component.html'
})
export class AlertDetailComponent implements OnInit {
    @Input() alert: Alert;

    constructor(private activatedRoute: ActivatedRoute, private alertService: AlertService) { }

    ngOnInit() {
        // subscribe to router event
        this.activatedRoute.params.subscribe((params: Params) => {
            let id = params['id'];
            this.alertService.getAlert(id)
                .then(alert => { this.alert = alert; });
        });
    }
}
