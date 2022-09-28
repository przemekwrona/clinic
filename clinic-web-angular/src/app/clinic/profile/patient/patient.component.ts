import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Patient, SurveyType} from "../../../services/Profile";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  public patients: Patient[] = [];

  public links: Map<SurveyType, string> = new Map([
    [SurveyType.ADHD_ICD_10, 'adhd-icd-10'],
    [SurveyType.K_SADS_PL, 'k-sads-pl']
  ])

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data['profile']);
      this.patients = data['profile'];
    })
  }

}
