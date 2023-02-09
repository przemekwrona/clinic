import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicComponent } from './clinic.component';
import { RouterModule } from "@angular/router";
import { ProfileModule } from "./profile/profile.module";
import { SharedModule } from "../shared/shared.module";
import { PatientModule } from "./patient/patient.module";
import { LoginService } from "../services/LoginService";
import {QuestionnaireModule} from "./questionnaire/questionnaire.module";


@NgModule({
  declarations: [
    ClinicComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ProfileModule,
    PatientModule,
    QuestionnaireModule
  ],
  providers: [
    LoginService
  ]
})
export class ClinicModule {
}
