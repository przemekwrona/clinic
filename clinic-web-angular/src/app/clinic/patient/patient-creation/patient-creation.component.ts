import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../../services/PatientService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient-creation',
  templateUrl: './patient-creation.component.html',
  styleUrls: ['./patient-creation.component.scss']
})
export class PatientCreationComponent implements OnInit {

  public patient: Patient = new Patient();

  constructor(private patientService: PatientService, private router: Router) {
  }

  ngOnInit(): void {
  }

  public createPatient() {
    this.patient.code = this.patient.name.substring(0, 3).toUpperCase() + this.patient.surname.substring(0, 3).toUpperCase();
    this.patientService.postPatient(this.patient).subscribe(response => {
      this.router.navigate(['/patients']);
    });
  }

}

export class Patient {
  public name: string = '';
  public surname: string = '';
  public code: string = '';
}

export class PatientResponse {
  public patientId: number = -1;
}
