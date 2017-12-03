
import { Component, OnInit } from '@angular/core';

import { Alert } from '../../shared/alert.type'
import { AlertService } from '../../shared/alert.service'

@Component({
    selector: 'alert-create',
    templateUrl: './alert-create.component.html'
})
export class AlertCreateComponent implements OnInit {
    constructor(private alertService: AlertService) {
    }

    ngOnInit() {
    }

    onSubmit(form: any): void {
        console.log('you submitted value:', form);

        this.alertService.createAlert(form as Alert);
    }
}
