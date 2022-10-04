import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Patient} from "../../../services/Profile";

@Component({
  selector: 'app-patient-reports',
  templateUrl: './patient-reports.component.html',
  styleUrls: ['./patient-reports.component.css']
})
export class PatientReportsComponent implements OnInit {

  public patientCode: string = '';
  public patient: Patient = new Patient();

  constructor(private route: ActivatedRoute) {
    this.patientCode = route.snapshot.paramMap.get('patientId') || '';
    this.route.data.subscribe((data) => this.patient = data['patient']);
  }

  ngOnInit(): void {
  }

}
