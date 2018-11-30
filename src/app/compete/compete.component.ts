import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compete',
  templateUrl: './compete.component.html',
  styleUrls: ['./compete.component.css']
})
export class CompeteComponent implements OnInit {
  menuItems = [
    {
      link: '',
      title: 'Vs. Class',
      img: '../../assets/img/Class.png',
      subtitle: '',
    },
    {
      link: '',
      title: 'Vs. World',
      img: '../../assets/img/World.png',
      subtitle: '',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
