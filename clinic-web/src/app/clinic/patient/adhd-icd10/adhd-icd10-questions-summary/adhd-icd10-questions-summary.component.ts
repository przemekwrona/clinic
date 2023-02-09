import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-adhd-icd10-questions-summary',
  templateUrl: './adhd-icd10-questions-summary.component.html',
  styleUrls: ['./adhd-icd10-questions-summary.component.scss']
})
export class AdhdIcd10QuestionsSummaryComponent implements OnInit {

  @Input() numberOfSymptoms: number | null = null;
  @Input() numberOfSymptomPoints: number | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
