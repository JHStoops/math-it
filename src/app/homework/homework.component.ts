import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {
  menuItems = [
    {
      link: 'homework',
      title: 'Current Homework',
      img: '../../assets/img/TimesCircle.png',
      subtitle: 'Times Tables',
    },
    {
      link: 'homework/past-grades',
      title: 'Past Grades',
      img: '../../assets/img/Grade.png',
      subtitle: '',
    },
    {
      link: 'learn',
      title: 'Help',
      img: '../../assets/img/Help.png',
      subtitle: '',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
