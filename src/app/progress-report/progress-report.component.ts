import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-report',
  templateUrl: './progress-report.component.html',
  styleUrls: ['./progress-report.component.css']
})
export class ProgressReportComponent implements OnInit {

  report = {
    startDate: "",
    endDate: "",
    topic: "all",
    source: "all"
  };

  constructor() { }

  ngOnInit() {
  }

  generateURLQuery(){
    let fields = {};
    for (let key in this.report){
      if (this.report[key] !== "") fields[key] = this.report[key];
    }
    return fields;
  }
}
