import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  index = 0;
  correctAnswers = 0;
  problems = [
    {
        first: 3,
        second: 2,
        answer: 6,
        multipleChoice: [ 14, 6, 4, 17]
    },
    {
        first: 2,
        second: 7,
        answer: 14,
        multipleChoice: [ 12, 7, 14, 18]
    },
    {
        first: 3,
        second: 6,
        answer: 18,
        multipleChoice: [ 29, 3, 33, 18]
    },
    {
        first: 3,
        second: 3,
        answer: 9,
        multipleChoice: [ 9, 21, 14, 17]
    },
    {
        first: 4,
        second: 7,
        answer: 28,
        multipleChoice: [ 0, 28, 24, 34]
    },
    {
        first: 5,
        second: 4,
        answer: 20,
        multipleChoice: [ 23, 33, 20, 42]
    },
    {
        first: 5,
        second: 9,
        answer: 45,
        multipleChoice: [ 38, 7, 4, 45]
    },
    {
        first: 6,
        second: 7,
        answer: 42,
        multipleChoice: [ 42, 35, 1, 28]
    },
    {
        first: 7,
        second: 8,
        answer: 56,
        multipleChoice: [ 17, 56, 10, 42]
    },
    {
        first: 8,
        second: 9,
        answer: 81,
        multipleChoice: [ 34, 48, 81, 56]
    }
];

  constructor() { }

  ngOnInit() {
  }

  assessAnswer(answer){
    if (answer === this.problems[this.index].answer) this.correctAnswers++;
    this.index++;
}

}
