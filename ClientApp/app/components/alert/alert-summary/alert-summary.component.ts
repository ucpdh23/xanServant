
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Alert } from '../../shared/alert.type'

@Component({
    selector: 'alert-summary',
    templateUrl: './alert-summary.component.html'
})
export class AlertSummaryComponent {
    @Input() alert: Alert;

    constructor(private router: Router) {
        this.router = router;
    }

    navigateToDetail() {
        this.router.navigate(["alert-detail", this.alert.id]);
    }
}
