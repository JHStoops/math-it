import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    index = 0;
    correctAnswers = 0;
    problems = [
            {
                first: 9,
                second: 9,
                answer: 1,
                multipleChoice: [ 1, 6, 4, 17]
            },
            {
                first: 4,
                second: 2,
                answer: 2,
                multipleChoice: [ 1, 2, 3, 4]
            },
            {
                first: 9,
                second: 3,
                answer: 3,
                multipleChoice: [ 29, 6, 3, 18]
            },
            {
                first: 12,
                second: 4,
                answer: 3,
                multipleChoice: [ 9, 21, 14, 3]
            },
            {
                first: 25,
                second: 5,
                answer: 5,
                multipleChoice: [ 5, 28, 24, 34]
            },
            {
                first: 0,
                second: 100,
                answer: 0,
                multipleChoice: [ 23, 0, 20, 42]
            },
            {
                first: 56,
                second: 8,
                answer: 7,
                multipleChoice: [ 38, 8, 7, 45]
            },
            {
                first: 56,
                second: 7,
                answer: 8,
                multipleChoice: [ 42, 35, 1, 8]
            },
            {
                first: 22,
                second: 2,
                answer: 11,
                multipleChoice: [ 11, 56, 10, 42]
            },
            {
                first: 35,
                second: 5,
                answer: 7,
                multipleChoice: [ 34, 7, 81, 56]
            }
        ];

  constructor() { }

  ngOnInit() {
  }

  assessAnswer(answer){
    if (answer === this.problems[this.index].answer) this.correctAnswers++;
    this.index++;
  }

  // displayProblem(problem){
  //   return problem.first + ' / ' + problem.second + ' = ';
  // }

}
