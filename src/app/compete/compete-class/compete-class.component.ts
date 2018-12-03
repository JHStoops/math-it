import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-compete-class',
  templateUrl: './compete-class.component.html',
  styleUrls: ['./compete-class.component.css']
})
export class CompeteClassComponent implements OnInit {
    topic = '';
    index = 0;
    correctAnswers = 0;
    problems = {
        addition: [
            {
                first: 5,
                second: 9,
                answer: 14,
                multipleChoice: [ 14, 13, 4, 17]
            },
            {
                first: 2,
                second: 14,
                answer: 16,
                multipleChoice: [ 12, 7, 16, 18]
            },
            {
                first: 16,
                second: 13,
                answer: 29,
                multipleChoice: [ 29, 3, 33, 26]
            },
            {
                first: 8,
                second: 13,
                answer: 21,
                multipleChoice: [ 5, 21, 14, 17]
            },
            {
                first: 17,
                second: 17,
                answer: 34,
                multipleChoice: [ 0, 14, 24, 34]
            },
            {
                first: 13,
                second: 20,
                answer: 33,
                multipleChoice: [ 23, 33, 7, 42]
            },
            {
                first: 21,
                second: 17,
                answer: 38,
                multipleChoice: [ 38, 7, 4, 23]
            },
            {
                first: 18,
                second: 17,
                answer: 35,
                multipleChoice: [ 31, 35, 1, 28]
            },
            {
                first: 9,
                second: 19,
                answer: 28,
                multipleChoice: [ 17, 28, 10, 42]
            },
            {
                first: 27,
                second: 29,
                answer: 56,
                multipleChoice: [ 34, 48, -2, 56]
            }
        ],
        subtraction: [
            {
                first: 9,
                second: 5,
                answer: 4,
                multipleChoice: [ 14, 13, 4, 17]
            },
            {
                first: 14,
                second: 2,
                answer: 12,
                multipleChoice: [ 12, 7, 16, 18]
            },
            {
                first: 16,
                second: 13,
                answer: 3,
                multipleChoice: [ 29, 3, 33, 26]
            },
            {
                first: 13,
                second: 8,
                answer: 5,
                multipleChoice: [ 5, 21, 14, 17]
            },
            {
                first: 17,
                second: 17,
                answer: 0,
                multipleChoice: [ 0, 14, 24, 34]
            },
            {
                first: 20,
                second: 13,
                answer: 7,
                multipleChoice: [ 23, 33, 7, 42]
            },
            {
                first: 21,
                second: 17,
                answer: 4,
                multipleChoice: [ 38, 7, 4, 23]
            },
            {
                first: 18,
                second: 17,
                answer: 1,
                multipleChoice: [ 31, 35, 1, 28]
            },
            {
                first: 19,
                second: 9,
                answer: 10,
                multipleChoice: [ 17, 28, 10, 42]
            },
            {
                first: 27,
                second: 29,
                answer: -2,
                multipleChoice: [ 34, 48, -2, 56]
            }
        ],
        multiplication: [
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
        ],
        division: [
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
        ]
    };


    constructor(private route: ActivatedRoute ) { }

    ngOnInit() {
        this.topic = this.route.snapshot.params['topic'];
    }

    assessAnswer(answer){
        if (answer === this.problems[this.topic][this.index].answer) this.correctAnswers++;
        this.index++;
    }

    displayProblem(problem){
        if (this.topic === 'addition') return problem.first + ' + ' + problem.second + ' = ';
        if (this.topic === 'subtraction') return problem.first + ' - ' + problem.second + ' = ';
        if (this.topic === 'multiplication') return problem.first + ' * ' + problem.second + ' = ';
        if (this.topic === 'division') return problem.first + ' / ' + problem.second + ' = ';
        return 'Error: You seemed to have taken a wrong turn somewhere!';
    }

}
