import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Patient} from "./patient-creation/patient-creation.component";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients: Patient[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => this.patients = data['patients'])
  }

}
