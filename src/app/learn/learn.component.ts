import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  menuItems = [
    {
      link: '',
      title: 'Addition',
      img: '../../assets/img/Plus.png',
      subtitle: '',
    },
    {
      link: '',
      title: 'Subtraction',
      img: '../../assets/img/Subtract.png',
      subtitle: '',
    },
    {
      link: '',
      title: 'Multiplication',
      img: '../../assets/img/Multiply.png',
      subtitle: '',
    },
    {
      link: '',
      title: 'Division',
      img: '../../assets/img/Divide.png',
      subtitle: '',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
