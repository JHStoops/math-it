import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-progress-report-results',
  templateUrl: './progress-report-results.component.html',
  styleUrls: ['./progress-report-results.component.css']
})
export class ProgressReportResultsComponent implements OnInit {

  report = {
    startDate: "",
    endDate: "",
    topic: "",
    source: ""
  };

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.report.startDate = params['startDate'];
      this.report.endDate = params['endDate'];
      this.report.topic = params['topic'];
      this.report.source = params['source'];
      this.generateScore();
    });
  }

  ngOnInit() { }

  filterData(source, topic){
    const self = this;
    return this.data.filter( el => topic === "all" || el.topic === topic)
      .filter( el => source === "all" || el.source === source)
      .filter( el => self.report.startDate === undefined || self.report.startDate <= el.date)
      .filter( el => self.report.endDate === undefined || self.report.endDate >= el.date);
  }

  numberOf(data, source){
    return data.reduce( (acc, el) => ((el.source === source || source === "all") ? acc + 1 : acc), 0);
  }

  getScore(data, source){
    const self = this;
    function reducer(acc, el){
      if (source !== 'all') return acc + el.grade / data.length;
      if (["homework", "learn", "lightning"].includes(el.source)) return acc + el.grade * 0.2 / self.numberOf(data, el.source);
      if (el.source === "tests") return acc + el.grade * 0.4 / self.numberOf(data, el.source);
      if (el.source === "challenges") return acc + el.grade * 0.05 / self.numberOf(data, el.source);
      return acc;
    }

    let score = data.reduce(reducer, 0) * 100;
    return score.toFixed(1);
  }

  generateScore(){
    /*
        Score Breakdown:
          Learn:    20%
          Lightning:20%
          Homework: 20%
          Test:     40%
          Challenge: 5% (bonus)
     */
    this.scores.total = this.getScore(     this.filterData(this.report.source, this.report.topic), 'all');
    this.scores.learn = this.getScore(     this.filterData('learn', this.report.topic), 'learn');
    this.scores.lightning = this.getScore( this.filterData('lightning', this.report.topic), 'lightning');
    this.scores.homework = this.getScore(  this.filterData('lightning', this.report.topic), 'homework');
    this.scores.tests = this.getScore(     this.filterData('homework', this.report.topic), 'tests');
    this.scores.challenges = this.getScore(this.filterData('challenges', this.report.topic), 'challenges');
    console.table(this.scores);

  }

  expectedScore: 0.85;
  scores = {
    total: 0,
    learn: 0,
    lightning: 0,
    homework: 0,
    tests: 0,
    challenges: 0
  };
  data = [
    {
      title: "1st Grade Beginner's Addition",
      date: "2018-11-09",
      grade: 0.96,
      minutesSpent: 42,
      topic: "addition",
      source: "homework"
    },
    {
      title: "1st Grade Beginner's Addition",
      date: "2018-11-09",
      grade: 0.98,
      minutesSpent: 56,
      topic: "addition",
      source: "tests"
    },
    {
      title: "1st Grade Beginner's Addition",
      date: "2018-11-09",
      grade: 0.62,
      minutesSpent: 12,
      topic: "addition",
      source: "challenges"
    },
    {
      title: "1st Grade Beginner's Addition",
      date: "2018-11-09",
      grade: 0.96,
      minutesSpent: 42,
      topic: "addition",
      source: "learn"
    },
    {
      title: "1st Grade Beginner's Addition",
      date: "2018-11-09",
      grade: 1.00,
      minutesSpent: 214,
      topic: "addition",
      source: "lightning"
    },
    {
      title: "1st Grade Intermediate Addition",
      date: "2018-11-17",
      grade: 0.84,
      minutesSpent: 25,
      topic: "addition",
      source: "homework"
    },
    {
      title: "1st Grade Intermediate Addition",
      date: "2018-11-19",
      grade: 0.81,
      minutesSpent: 47,
      topic: "addition",
      source: "tests"
    },
    {
      title: "1st Grade Intermediate Addition",
      date: "2018-11-15",
      grade: 0.46,
      minutesSpent: 15,
      topic: "addition",
      source: "challenges"
    },
    {
      title: "1st Grade Intermediate Addition",
      date: "2018-11-15",
      grade: 0.96,
      minutesSpent: 42,
      topic: "addition",
      source: "learn"
    },
    {
      title: "1st Grade Intermediate Addition",
      date: "2018-11-15",
      grade: 0.93,
      minutesSpent: 64,
      topic: "addition",
      source: "lightning"
    },
    {
      title: "1st Grade Beginner's Subtraction",
      date: "2018-11-09",
      grade: 0.86,
      minutesSpent: 53,
      topic: "subtraction",
      source: "homework"
    },
    {
      title: "1st Grade Beginner's Subtraction",
      date: "2018-11-09",
      grade: 0.89,
      minutesSpent: 60,
      topic: "subtraction",
      source: "tests"
    },
    {
      title: "1st Grade Beginner's Subtraction",
      date: "2018-11-09",
      grade: 0.73,
      minutesSpent: 11,
      topic: "subtraction",
      source: "challenges"
    },
    {
      title: "1st Grade Beginner's Subtraction",
      date: "2018-11-09",
      grade: 0.91,
      minutesSpent: 47,
      topic: "subtraction",
      source: "learn"
    },
    {
      title: "1st Grade Beginner's Subtraction",
      date: "2018-11-09",
      grade: 1.00,
      minutesSpent: 256,
      topic: "subtraction",
      source: "lightning"
    },
    {
      title: "1st Grade Intermediate Subtraction",
      date: "2018-11-17",
      grade: 0.88,
      minutesSpent: 67,
      topic: "subtraction",
      source: "homework"
    },
    {
      title: "1st Grade Intermediate Subtraction",
      date: "2018-11-19",
      grade: 0.93,
      minutesSpent: 55,
      topic: "subtraction",
      source: "tests"
    },
    {
      title: "1st Grade Intermediate Subtraction",
      date: "2018-11-19",
      grade: 0.56,
      minutesSpent: 14,
      topic: "subtraction",
      source: "challenges"
    },
    {
      title: "1st Grade Intermediate Subtraction",
      date: "2018-11-15",
      grade: 0.98,
      minutesSpent: 57,
      topic: "subtraction",
      source: "learn"
    },
    {
      title: "1st Grade Intermediate Subtraction",
      date: "2018-11-15",
      grade: 0.84,
      minutesSpent: 54,
      topic: "subtraction",
      source: "lightning"
    },

    {
      title: "1st Grade Beginner's Division",
      date: "2018-11-21",
      grade: 0.96,
      minutesSpent: 42,
      topic: "division",
      source: "homework"
    },
    {
      title: "1st Grade Beginner's Division",
      date: "2018-11-22",
      grade: 0.98,
      minutesSpent: 56,
      topic: "division",
      source: "tests"
    },
    {
      title: "1st Grade Beginner's Division",
      date: "2018-11-22",
      grade: 0.62,
      minutesSpent: 12,
      topic: "division",
      source: "challenges"
    },
    {
      title: "1st Grade Beginner's Division",
      date: "2018-11-20",
      grade: 0.96,
      minutesSpent: 42,
      topic: "division",
      source: "learn"
    },
    {
      title: "1st Grade Beginner's Division",
      date: "2018-11-20",
      grade: 1.00,
      minutesSpent: 214,
      topic: "division",
      source: "lightning"
    },
    {
      title: "1st Grade Intermediate Division",
      date: "2018-11-17",
      grade: 0.84,
      minutesSpent: 25,
      topic: "division",
      source: "homework"
    },
    {
      title: "1st Grade Intermediate Division",
      date: "2018-11-19",
      grade: 0.81,
      minutesSpent: 47,
      topic: "division",
      source: "tests"
    },
    {
      title: "1st Grade Intermediate Division",
      date: "2018-11-19",
      grade: 0.46,
      minutesSpent: 15,
      topic: "division",
      source: "challenges"
    },
    {
      title: "1st Grade Intermediate Division",
      date: "2018-11-15",
      grade: 0.96,
      minutesSpent: 42,
      topic: "division",
      source: "learn"
    },
    {
      title: "1st Grade Intermediate Division",
      date: "2018-11-15",
      grade: 0.93,
      minutesSpent: 64,
      topic: "division",
      source: "lightning"
    },
    {
      title: "1st Grade Beginner's Multiplication",
      date: "2018-11-09",
      grade: 0.86,
      minutesSpent: 53,
      topic: "multiplication",
      source: "homework"
    },
    {
      title: "1st Grade Beginner's Multiplication",
      date: "2018-11-09",
      grade: 0.89,
      minutesSpent: 60,
      topic: "multiplication",
      source: "tests"
    },
    {
      title: "1st Grade Beginner's Multiplication",
      date: "2018-11-09",
      grade: 0.73,
      minutesSpent: 11,
      topic: "multiplication",
      source: "challenges"
    },
    {
      title: "1st Grade Beginner's Multiplication",
      date: "2018-11-09",
      grade: 0.91,
      minutesSpent: 47,
      topic: "multiplication",
      source: "learn"
    },
    {
      title: "1st Grade Beginner's Multiplication",
      date: "2018-11-09",
      grade: 1.00,
      minutesSpent: 256,
      topic: "multiplication",
      source: "lightning"
    },
    {
      title: "1st Grade Intermediate Multiplication",
      date: "2018-11-17",
      grade: 0.88,
      minutesSpent: 67,
      topic: "multiplication",
      source: "homework"
    },
    {
      title: "1st Grade Intermediate Multiplication",
      date: "2018-11-19",
      grade: 0.93,
      minutesSpent: 55,
      topic: "multiplication",
      source: "tests"
    },
    {
      title: "1st Grade Intermediate Multiplication",
      date: "2018-11-19",
      grade: 0.56,
      minutesSpent: 14,
      topic: "multiplication",
      source: "challenges"
    },
    {
      title: "1st Grade Intermediate Multiplication",
      date: "2018-11-15",
      grade: 0.98,
      minutesSpent: 57,
      topic: "multiplication",
      source: "learn"
    },
    {
      title: "1st Grade Intermediate Multiplication",
      date: "2018-11-15",
      grade: 0.84,
      minutesSpent: 54,
      topic: "multiplication",
      source: "lightning"
    }
  ];

}
