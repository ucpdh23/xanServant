import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component'
import { ChartComponent } from './components/shared/chart/chart.component'
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { NewsListComponent } from './components/news/news-list/news-list.component'
import { NewsSummaryComponent } from './components/news/news-summary/news-summary.component'
import { NewsDetailComponent } from './components/news/news-detail/news-detail.component'

import { AlertCreateComponent } from './components/alert/alert-create/alert-create.component'
import { AlertListComponent } from './components/alert/alert-list/alert-list.component'
import { AlertSummaryComponent } from './components/alert/alert-summary/alert-summary.component'
import { AlertDetailComponent } from './components/alert/alert-detail/alert-detail.component'

import { FormatNewsDatePipe } from './components/shared/format-date.pipe'

import { NewsService } from './components/shared/news.service'
import { AlertService } from './components/shared/alert.service'


export function highchartsFactory() {
    return require('highcharts');
}


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        ChartComponent,
        NewsListComponent,
        NewsSummaryComponent,
        NewsDetailComponent,
        FormatNewsDatePipe,
        AlertCreateComponent,
        AlertListComponent,
        AlertSummaryComponent,
        AlertDetailComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'detail/:id', component: NewsDetailComponent },
            { path: 'alert-detail/:id', component: AlertDetailComponent },
            
            { path: 'alert/create', component: AlertCreateComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        ChartModule,
    ],
    providers: [
        {
            provide: HighchartsStatic,
            useFactory: highchartsFactory
        },
        NewsService,
        AlertService
    ]
})
export class AppModuleShared {
}
