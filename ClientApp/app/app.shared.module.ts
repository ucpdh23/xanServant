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

import { FormatNewsDatePipe } from './components/shared/format-date.pipe'

import { NewsService } from './components/shared/news.service'

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
        FormatNewsDatePipe
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'detail/:id', component: NewsDetailComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        ChartModule,
    ],
    providers: [
        {
            provide: HighchartsStatic,
            useFactory: highchartsFactory
        },
        NewsService
    ]
})
export class AppModuleShared {
}
