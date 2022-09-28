import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhdIcd10Component } from './adhd-icd10.component';

describe('AdhdIcd10Component', () => {
  let component: AdhdIcd10Component;
  let fixture: ComponentFixture<AdhdIcd10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdhdIcd10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdhdIcd10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
