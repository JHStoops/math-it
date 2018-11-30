import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { LightningRoundComponent } from './lightning-round/lightning-round.component';
import { LearnComponent } from './learn/learn.component';
import { HomeworkComponent } from './homework/homework.component';
import { CompeteComponent } from './compete/compete.component';
import { ProgressReportComponent } from './progress-report/progress-report.component';
import { QuizTestComponent } from './quiz-test/quiz-test.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProgressReportSavedComponent } from './progress-report-saved/progress-report-saved.component';
import { ProgressReportResultsComponent } from './progress-report-results/progress-report-results.component';
import { ProgressReportShareComponent } from './progress-report-share/progress-report-share.component';
import { PastGradesComponent } from './homework/past-grades/past-grades.component';
import { HelpComponent } from './homework/help/help.component';
import { TestComponent } from './quiz-test/test/test.component';
import { QuizComponent } from './quiz-test/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    LightningRoundComponent,
    LearnComponent,
    HomeworkComponent,
    CompeteComponent,
    ProgressReportComponent,
    QuizTestComponent,
    NavComponent,
    HomeComponent,
    ProgressReportSavedComponent,
    ProgressReportResultsComponent,
    ProgressReportShareComponent,
    PastGradesComponent,
    HelpComponent,
    TestComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
