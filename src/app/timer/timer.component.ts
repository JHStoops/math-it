import { Component, OnInit } from '@angular/core';
var Countdown = require('countdown-js');

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  cdTimer = new Date(new Date().getTime() + 1000 * 60 * 15);
  secondsLeft = 0;
  minutesLeft = 0;

  constructor() { }

  ngOnInit() {
    const self = this;
    this.cdTimer = Countdown.timer(this.cdTimer, function(timeLeft) {
      self.minutesLeft = timeLeft.minutes;
      self.secondsLeft = timeLeft.seconds;
    }, function() {
      console.log("Countdown Finished!")
    });
  }

}
