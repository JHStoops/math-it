import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompeteComponent } from './compete/compete.component';
import { HomeworkComponent } from './homework/homework.component';
import { LearnComponent } from './learn/learn.component';
import { LightningRoundComponent } from './lightning-round/lightning-round.component';
import { LoginComponent } from './login/login.component';
import { ProgressReportComponent } from './progress-report/progress-report.component';
import { QuizTestComponent } from './quiz-test/quiz-test.component';
import { HomeComponent } from './home/home.component';
import {ProgressReportResultsComponent} from "./progress-report/progress-report-results/progress-report-results.component";
import {ProgressReportSavedComponent} from "./progress-report/progress-report-saved/progress-report-saved.component";
import { PastGradesComponent } from './homework/past-grades/past-grades.component';
import { HelpComponent } from './homework/help/help.component';
import { PracticeComponent } from './learn/practice/practice.component';
import { TutorialComponent } from './learn/tutorial/tutorial.component';
import { LearnMenuComponent } from './learn/learn-menu/learn-menu.component';
import { CompeteClassComponent } from './compete/compete-class/compete-class.component';
import { CompeteMainComponent } from './compete/compete-main/compete-main.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {title: 'Home'}
    },
    {
        path: 'compete',
        component: CompeteComponent,
        data: {title: 'Compete'},
		children : [
		{
			path: '',
			component: CompeteMainComponent,
			data: {title : 'Compete'}
		},
		{
			path: 'class',
			component: CompeteClassComponent,
			data: {title : 'Vs Class'}
		}
		]
    },
    {
        path: 'homework',
        component: HomeworkComponent,
        data: {title: 'Homework'},
        children: [
            {
                path: 'past-grades',
                component: PastGradesComponent,
                data: {title: 'Past Grades'}
            },
            {
                path: 'help',
                component: HelpComponent,
                data: {title: 'Homework Help'}
            }
        ]
    },
    {
        path: 'learn',
        component: LearnComponent,
        data: {title: 'Learn'},
		children: [
			{
				path: '',
				component: LearnMenuComponent,
				data: {title: 'Category selection'}
			},
		    {
                path: 'practice',
                component: PracticeComponent,
                data: {title: 'Practice'}
            },
            {
                path: 'tutorial',
                component: TutorialComponent,
                data: {title: 'Tutorial'}
            }
		]
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
