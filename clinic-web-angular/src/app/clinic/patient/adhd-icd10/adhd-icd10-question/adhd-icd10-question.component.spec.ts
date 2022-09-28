import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhdIcd10QuestionComponent } from './adhd-icd10-question.component';

describe('AdhdIcd10QuestionComponent', () => {
  let component: AdhdIcd10QuestionComponent;
  let fixture: ComponentFixture<AdhdIcd10QuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdhdIcd10QuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdhdIcd10QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
