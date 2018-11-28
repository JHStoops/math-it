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
    {"name": "Lightning Round", "link": "#"},
    {"name": "Learn", "link": "#"},
    {"name": "Homework", "link": "#"},
    {"name": "Quiz & Test", "link": "#"},
    {"name": "Compete", "link": "#"},
    {"name": "Reports", "link": "#"}
  ];
}
