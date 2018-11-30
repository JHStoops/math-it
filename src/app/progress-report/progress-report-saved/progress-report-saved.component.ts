import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-report-saved',
  templateUrl: './progress-report-saved.component.html',
  styleUrls: ['./progress-report-saved.component.css']
})
export class ProgressReportSavedComponent implements OnInit {

    savedReports = [
        {
            name: 'Tests from November',
            startDate: '2018-11-01',
            endDate: '2018-11-30',
            topic: 'all',
            source: 'tests'
        },
        {
            name: 'Challenges since November',
            startDate: '2018-11-01',
            topic: 'all',
            source: 'challenges'
        },
        {
            name: 'Homework score since November',
            startDate: '2018-11-01',
            topic: 'All',
            source: 'homework'
        },

    ];

  constructor() { }

  ngOnInit() {
    // Grab saved reports from backend
    // Stored in JSON blob for this assignment
  }

}
