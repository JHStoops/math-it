import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightning-round-menu',
  templateUrl: './lightning-round-menu.component.html',
  styleUrls: ['./lightning-round-menu.component.css']
})
export class LightningRoundMenuComponent implements OnInit {
    menuItems = [
        {
            link: 'lightning-round/addition',
            title: 'Addition',
            img: '../../assets/img/Plus.png',
            subtitle: ''
        },
        {
            link: 'lightning-round/subtraction',
            title: 'Subtraction',
            img: '../../assets/img/Subtract.png',
            subtitle: ''
        },
        {
            link: 'lightning-round/multiplication',
            title: 'Multiplication',
            img: '../../assets/img/Multiply.png',
            subtitle: ''
        },
        {
            link: 'lightning-round/division',
            title: 'Division',
            img: '../../assets/img/Divide.png',
            subtitle: ''
        }
    ];

  constructor() { }

  ngOnInit() {
  }

}
