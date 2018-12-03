import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompeteComponent } from './compete/compete.component';
import { HomeworkComponent } from './homework/homework.component';
import { LearnComponent } from './learn/learn.component';
import { LightningRoundComponent } from './lightning-round/lightning-round.component';
import { LightningRoundMenuComponent } from './lightning-round/lightning-round-menu/lightning-round-menu.component';
import { LightningRoundPracticeComponent } from './lightning-round/lightning-round-practice/lightning-round-practice.component';
import { LoginComponent } from './login/login.component';
import { ProgressReportComponent } from './progress-report/progress-report.component';
import { QuizTestComponent } from './quiz-test/quiz-test.component';
import { HomeComponent } from './home/home.component';
import { ProgressReportResultsComponent } from './progress-report/progress-report-results/progress-report-results.component';
import { ProgressReportSavedComponent } from './progress-report/progress-report-saved/progress-report-saved.component';
import { PastGradesComponent } from './homework/past-grades/past-grades.component';
import { PracticeComponent } from './learn/practice/practice.component';
import { TutorialComponent } from './learn/tutorial/tutorial.component';
import { LearnMenuComponent } from './learn/learn-menu/learn-menu.component';
import { CompeteClassComponent } from './compete/compete-class/compete-class.component';
import { CompeteMainComponent } from './compete/compete-main/compete-main.component';
import { QuizComponent } from './quiz-test/quiz/quiz.component';
import { TestComponent } from './quiz-test/test/test.component';
import { CurrentHomeworkComponent } from './homework/current-homework/current-homework.component';
import { CompeteSelectComponent } from './compete/compete-select/compete-select.component';

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
				path: 'select',
				component: CompeteSelectComponent,
				data: {title : 'Select category'},
			},
			{
				path: ':topic',
				component: CompeteClassComponent,
			}
		]
    },
    {
        path: 'homework',
        component: HomeworkComponent,
        data: {title: 'Homework'},
    },
    {
        path: 'homework/past-grades',
        component: PastGradesComponent,
        data: {title: 'Past Grades'}
    },
    {
        path: 'homework/current-homework',
        component: CurrentHomeworkComponent,
        data: {title: 'Current Homework'}
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
        children: [
            {
                path: '',
                component: LightningRoundMenuComponent
            },
            {
                path: ':topic',
                component: LightningRoundPracticeComponent
            }
        ]
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
    },
    {
        path: 'quiz-test/quiz',
        component: QuizComponent,
        data: {title: 'Quiz'}
    },
    {
        path: 'quiz-test/test',
        component: TestComponent,
        data: {title: 'Test'}
    },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
