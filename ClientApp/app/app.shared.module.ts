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
import { NewsListComponent } from './components/news/news-list/news-list.component'
import { NewsSummaryComponent } from './components/news/news-summary/news-summary.component'


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        ChartComponent,
        NewsListComponent,
        NewsSummaryComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        ChartModule.forRoot(require('highcharts'))
    ]
})
export class AppModuleShared {
}
