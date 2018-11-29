import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title = 'math-it';

  navItems = [
    {"name": "Lightning Round", "link": "/lightning-round"},
    {"name": "Learn", "link": "/learn"},
    {"name": "Homework", "link": "/homework"},
    {"name": "Quiz & Test", "link": "/quiz-test"},
    {"name": "Compete", "link": "/compete"},
    {"name": "Reports", "link": "/reports"}
  ];
  
  constructor() { }

  ngOnInit() {

  }

}
