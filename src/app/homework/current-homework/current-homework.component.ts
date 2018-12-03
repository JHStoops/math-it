import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-homework',
  templateUrl: './current-homework.component.html',
  styleUrls: ['./current-homework.component.css']
})
export class CurrentHomeworkComponent implements OnInit {
  index = 0;
  correctAnswers = 0;
  problems = [
    {
        first: '2x',
        second: 10,
        answer: 5,
        multipleChoice: [ 2, 3, 10, 5]
    },
    {
        first: 'x - 3',
        second: 12,
        answer: 15,
        multipleChoice: [ 10, 6, 15, 3]
    },
    {
        first: 'x + 6',
        second: -3,
        answer: -9,
        multipleChoice: [ 3, 6, -9, 9]
    },
    {
        first: '2x + 8',
        second: '14',
        answer: 3,
        multipleChoice: [ 3, 8, 4, 7]
    },
    {
        first: '2x',
        second: 8,
        answer: 4,
        multipleChoice: [ 0, 4, 8, 2]
    },
    {
        first: '9x',
        second: 36,
        answer: 4,
        multipleChoice: [ 6, 4, 3, -3]
    },
    {
        first: 'x - 6',
        second: -4,
        answer: 2,
        multipleChoice: [ 2, -2, 4, -3]
    }
];

  constructor() { }

  ngOnInit() {
  }

  assessAnswer(answer) {
    if (answer === this.problems[this.index].answer) this.correctAnswers++;
    this.index++;
  }

}
