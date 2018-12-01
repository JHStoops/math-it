import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  menuItems = [
    {
      link: 'learn/tutorial',
      title: 'Addition',
      img: '../../assets/img/Plus.png',
      subtitle: '',
    },
    {
      link: 'learn/tutorial',
      title: 'Subtraction',
      img: '../../assets/img/Subtract.png',
      subtitle: '',
    },
    {
      link: 'learn/tutorial',
      title: 'Multiplication',
      img: '../../assets/img/Multiply.png',
      subtitle: '',
    },
    {
      link: 'learn/practice',
      title: 'Division',
      img: '../../assets/img/Divide.png',
      subtitle: '',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
