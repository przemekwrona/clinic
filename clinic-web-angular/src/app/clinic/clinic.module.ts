import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClinicComponent} from './clinic.component';
import {RouterModule} from "@angular/router";
import {ProfileModule} from "./profile/profile.module";
import {SharedModule} from "../shared/shared.module";
import {PatientModule} from "./patient/patient.module";


@NgModule({
  declarations: [
    ClinicComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ProfileModule,
    PatientModule
  ]
})
export class ClinicModule {
}
