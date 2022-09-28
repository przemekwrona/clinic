import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientComponent} from './patient.component';
import {KSadsPLModule} from "./k-sads-pl/k-sads-pl.module";
import {AdhdIcd10Module} from "./adhd-icd10/adhd-icd10.module";
import { PatientDetailsComponent } from './patient-details/patient-details.component';


@NgModule({
  declarations: [
    PatientComponent,
    PatientDetailsComponent,
  ],
  imports: [
    CommonModule,
    KSadsPLModule,
    AdhdIcd10Module
  ]
})
export class PatientModule {
}
