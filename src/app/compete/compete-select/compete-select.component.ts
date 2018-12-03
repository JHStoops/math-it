import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compete-select',
  templateUrl: './compete-select.component.html',
  styleUrls: ['./compete-select.component.css']
})
export class CompeteSelectComponent implements OnInit {

    menuItems = [
        {
            link: 'compete/addition',
            title: 'Addition',
            img: '../../assets/img/Plus.png',
            subtitle: ''
        },
        {
            link: 'compete/subtraction',
            title: 'Subtraction',
            img: '../../assets/img/Subtract.png',
            subtitle: ''
        },
        {
            link: 'compete/multiplication',
            title: 'Multiplication',
            img: '../../assets/img/Multiply.png',
            subtitle: ''
        },
        {
            link: 'compete/division',
            title: 'Division',
            img: '../../assets/img/Divide.png',
            subtitle: ''
        }
    ];


  constructor() { }

  ngOnInit() {
  }

}
