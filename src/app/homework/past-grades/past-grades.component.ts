import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-past-grades',
  templateUrl: './past-grades.component.html',
  styleUrls: ['./past-grades.component.css']
})
export class PastGradesComponent implements OnInit {
  closeResult: string;
  selectedGrade;

  grades = [
    {
      grade: 'A+',
      score: '10/10',
      assignment: 'Addition',
      comments: 'Great work! =)'
    },
    {
      grade: 'A+',
      score: '10/10',
      assignment: 'Multiplication',
      comments: 'Perfect!'
    },
    {
      grade: 'A+',
      score: '10/10',
      assignment: 'Division',
      comments: 'Awesome!!'
    },
  ]

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content, grade) {
    this.selectedGrade = grade;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
