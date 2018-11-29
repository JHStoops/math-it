import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-report-saved',
  templateUrl: './progress-report-saved.component.html',
  styleUrls: ['./progress-report-saved.component.css']
})
export class ProgressReportSavedComponent implements OnInit {

    savedReports = [
        {
            name: 'tests from August',
            startDate: '2018-08-01',
            endDate: '2018-08-30',
            topic: 'all',
            source: 'tests'
        },
        {
            name: 'challenges since August',
            startDate: '2018-08-01',
            topic: 'all',
            source: 'challenges'
        },
        {
            name: 'Homework score since August',
            startDate: '2018-08-01',
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
