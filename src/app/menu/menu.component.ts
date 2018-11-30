import { Component, OnInit, Input } from '@angular/core';
// import { Menu } from '../models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() itemsToDisplay;
  @Input() columns;

  col: number;

  constructor() {
    

   }

  ngOnInit() {
    this.col = 12 / this.columns;
  }

}
