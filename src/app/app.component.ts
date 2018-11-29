import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'math-it';
  activePage = 'Home';
  isLoggedIn = true;
  navItems = [
    {"name": "Lightning Round", "link": "/lightning-round"},
    {"name": "Learn", "link": "/learn"},
    {"name": "Homework", "link": "/homework"},
    {"name": "Quiz & Test", "link": "/quiz-test"},
    {"name": "Compete", "link": "/compete"},
    {"name": "Reports", "link": "/reports"}
  ];
}
