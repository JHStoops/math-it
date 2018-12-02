import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compete-main',
  templateUrl: './compete-main.component.html',
  styleUrls: ['./compete-main.component.css']
})
export class CompeteMainComponent implements OnInit {
  menuItems = [
    {
      link: 'compete/class',
      title: 'Vs. Class',
      img: '../../assets/img/Class.png',
      subtitle: '',
    },
    {
      link: 'compete/class',
      title: 'Vs. World',
      img: '../../assets/img/World.png',
      subtitle: '',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
