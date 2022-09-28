import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientComponent} from './patient.component';
import {KSadsPLModule} from "./k-sads-pl/k-sads-pl.module";
import {AdhdIcd10Module} from "./adhd-icd10/adhd-icd10.module";
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientCreationComponent } from './patient-creation/patient-creation.component';
import {SharedModule} from "../../shared/shared.module";
import {PatientService} from "../../services/PatientService";
import {PatientsResolver} from "../profile/patient/patient.resolver";
import { PatientReportsComponent } from './patient-reports/patient-reports.component';


@NgModule({
  declarations: [
    PatientComponent,
    PatientDetailsComponent,
    PatientCreationComponent,
    PatientReportsComponent,
  ],
  imports: [
    CommonModule,
    KSadsPLModule,
    AdhdIcd10Module,
    SharedModule
  ],
  providers: [
    PatientService,
    PatientsResolver
  ]
})
export class PatientModule {
}
