import { Component, OnInit } from '@angular/core';
// import { Menu } from '../models/menu.model';

@Component({
  selector: 'app-quiz-test',
  templateUrl: './quiz-test.component.html',
  styleUrls: ['./quiz-test.component.css']
})
export class QuizTestComponent implements OnInit {
  menuItems = [
    {
      link: 'quiz-test/quiz',
      title: 'Current Quiz',
      img: '../assets/img/CurrentQuiz.png',
      subtitle: 'Order of Operations',
    },
    {
      link: 'quiz-test/test',
      title: 'Current Test',
      img: '../assets/img/CurrentTest.png',
      subtitle: 'Division',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
