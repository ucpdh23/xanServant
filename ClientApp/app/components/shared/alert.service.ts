import { Alert } from './alert.type'

import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class AlertService {
    constructor(private http: Http) { }

    createAlert(alert: Alert) {
        return this.http.post("api/Alert", alert)
            .map(response => console.log('you submitted value:', response))
            .toPromise();

    }

    getAlerts() {
        return this.http.get("api/Alert")
            .map(response => response.json() as Alert[])
            .toPromise();
    }

    getAlert(id: string) {
        return this.http.get("api/Alert/" + id)
            .map(response => response.json() as Alert)
            .toPromise();
    }
}