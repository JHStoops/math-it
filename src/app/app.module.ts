import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { LightningRoundComponent } from './lightning-round/lightning-round.component';
import { LearnComponent } from './learn/learn.component';
import { HomeworkComponent } from './homework/homework.component';
import { CompeteComponent } from './compete/compete.component';
import { ProgressReportComponent } from './progress-report/progress-report.component';
import { QuizTestComponent } from './quiz-test/quiz-test.component';

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
    QuizTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
