
import { Component, OnInit } from '@angular/core';
import { Alert } from '../../shared/alert.type'

import { AlertService } from '../../shared/alert.service'

@Component({
    selector: 'alert-list',
    templateUrl: './alert-list.component.html'
})
export class AlertListComponent implements OnInit {
    alerts: Alert[];

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getAlerts()
            .then(alerts => { this.alerts = alerts; });
    }
}
