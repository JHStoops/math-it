import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompeteComponent } from './compete/compete.component';
import { HomeworkComponent } from './homework/homework.component';
import { LearnComponent } from './learn/learn.component';
import { LightningRoundComponent } from './lightning-round/lightning-round.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProgressReportComponent } from './progress-report/progress-report.component';
import { QuizTestComponent } from './quiz-test/quiz-test.component';
import { HomeComponent } from './home/home.component';
import {ProgressReportShareComponent} from "./progress-report-share/progress-report-share.component";
import {ProgressReportResultsComponent} from "./progress-report-results/progress-report-results.component";
import {ProgressReportSavedComponent} from "./progress-report-saved/progress-report-saved.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {title: 'Home'}
    },
    {
        path: 'compete',
        component: CompeteComponent,
        data: {title: 'Compete'}
    },
    {
        path: 'homework',
        component: HomeworkComponent,
        data: {title: 'Homework'}
    },
    {
        path: 'learn',
        component: LearnComponent,
        data: {title: 'Learn'}
    },
    {
        path: 'lightning-round',
        component: LightningRoundComponent,
        data: {title: 'Lightning Round Component'}
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {title: 'Login'}
    },
    {
        path: 'reports',
        component: ProgressReportComponent,
        data: {title: 'Progress Report'},
        children: [
            {
                path: '',
                component: ProgressReportSavedComponent,
                data: {title: 'Save Progress Reports'}
            },
            {
                path: 'results',
                component: ProgressReportResultsComponent,
                data: {title: 'Progress Reports Results'}
            },
            {
                path: 'share',
                component: ProgressReportShareComponent,
                data: {title: 'Share Progress Reports'}
            }
        ]
    },
    {
        path: 'quiz-test',
        component: QuizTestComponent,
        data: {title: 'Quiz Test'}
    }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
