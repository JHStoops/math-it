import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuItems = [
    {
      link: 'lightning-round',
      title: 'Lightning Round',
      img: '../../assets/img/lightning1.PNG',
      subtitle: '',
    },
    {
      link: 'learn',
      title: 'Learn',
      img: '../../assets/img/learn.PNG',
      subtitle: '',
    },
    {
      link: 'homework',
      title: 'Homework',
      img: '../../assets/img/homework.PNG',
      subtitle: '',
    },
    {
      link: 'quiz-test',
      title: 'Quizzes & Tests',
      img: '../../assets/img/quizzesntests.PNG',
      subtitle: '',
    },
    {
      link: 'compete',
      title: 'Compete',
      img: '../../assets/img/compete.PNG',
      subtitle: '',
    },
    {
      link: 'reports',
      title: 'Reports',
      img: '../../assets/img/progress.PNG',
      subtitle: '',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
