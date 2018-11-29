import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() itemsToDisplay: Array<Menu>;

  constructor() {
    this.itemsToDisplay = [
      {
        link: '',
        title: 'Main Title',
        img: '../assets/img/Quiz-Games.png',
        subtitle: 'Subtitle'
      }
    ]
   }

  ngOnInit() {
  }

}
