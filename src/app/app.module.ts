import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { ProgressReportSavedComponent } from './progress-report/progress-report-saved/progress-report-saved.component';
import { ProgressReportResultsComponent } from './progress-report/progress-report-results/progress-report-results.component';
import { PastGradesComponent } from './homework/past-grades/past-grades.component';
import { TestComponent } from './quiz-test/test/test.component';
import { QuizComponent } from './quiz-test/quiz/quiz.component';
import { PracticeComponent } from './learn/practice/practice.component';
import { TutorialComponent } from './learn/tutorial/tutorial.component';
import { CanvasComponent } from './learn/practice/canvas/canvas.component';
import { LearnMenuComponent } from './learn/learn-menu/learn-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompeteClassComponent } from './compete/compete-class/compete-class.component';
import { CompeteMainComponent } from './compete/compete-main/compete-main.component';
import { LightningRoundMenuComponent } from './lightning-round/lightning-round-menu/lightning-round-menu.component';
import { LightningRoundPracticeComponent } from './lightning-round/lightning-round-practice/lightning-round-practice.component';

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
    PastGradesComponent,
    TestComponent,
    QuizComponent,
    PracticeComponent,
    TutorialComponent,
    CanvasComponent,
    LearnMenuComponent,
    CompeteClassComponent,
    CompeteMainComponent,
    LightningRoundMenuComponent,
    LightningRoundPracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
