import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhdIcd10QuestionsSummaryComponent } from './adhd-icd10-questions-summary.component';

describe('AdhdIcd10QuestionsSummaryComponent', () => {
  let component: AdhdIcd10QuestionsSummaryComponent;
  let fixture: ComponentFixture<AdhdIcd10QuestionsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdhdIcd10QuestionsSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdhdIcd10QuestionsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
