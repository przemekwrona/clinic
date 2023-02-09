import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-adhd-icd10-question',
  templateUrl: './adhd-icd10-question.component.html',
  styleUrls: ['./adhd-icd10-question.component.scss']
})
export class AdhdIcd10QuestionComponent implements OnInit {

  @Input() section: string = '';
  @Input() index: string = '';
  @Input() translationKey: string = '';
  @Input() isHighlighted: boolean = true;

  @Input() response: number | undefined;
  @Output() responseChange = new EventEmitter<number>();

  answers: number[] = [3, 2, 1, 0]

  constructor() {
  }

  ngOnInit(): void {
  }

  is3Or2(response: number): boolean {
    return response === 3 || response === 2;
  }

  onChangeAnswer(answer: number) {
    this.responseChange.emit(answer);
  }

}
