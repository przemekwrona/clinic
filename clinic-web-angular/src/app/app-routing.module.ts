import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ClinicComponent} from "./clinic/clinic.component";
import {ProfileComponent, Tabs} from "./clinic/profile/profile.component";
import {OverviewComponent} from "./clinic/profile/overview/overview.component";
import {ResearchComponent} from "./clinic/profile/research/research.component";
import {ProfileResolver} from "./clinic/profile/profile.resolver";
import {PatientComponent as ProfilePatient} from "./clinic/profile/patient/patient.component";
import {PatientComponent} from "./clinic/patient/patient.component";
import {PatientsResolver} from "./clinic/profile/patient/patient.resolver";
import {PatientDetailsComponent} from "./clinic/patient/patient-details/patient-details.component";
import {KSadsPLComponent} from "./clinic/patient/k-sads-pl/k-sads-pl.component";
import {AdhdIcd10Component} from "./clinic/patient/adhd-icd10/adhd-icd10.component";
import {KSadsPlResolver} from "./clinic/patient/k-sads-pl/k-sads-pl.resolver";
import {AdhdIcd10Resolver} from "./clinic/patient/adhd-icd10/adhd-icd10.resolver";
import {PatientCreationComponent} from "./clinic/patient/patient-creation/patient-creation.component";
import {PatientReportsComponent} from "./clinic/patient/patient-reports/patient-reports.component";

const routes: Routes = [{path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: '', component: ClinicComponent, children: [
      {
        path: 'profile',
        component: ProfileComponent,
        resolve: {
          profile: ProfileResolver
        },
        children: [
          {
            path: 'overview',
            component: OverviewComponent,
            data: {
              tab: Tabs.OVERVIEW
            }
          },
          {
            path: 'patients',
            component: ProfilePatient,
            data: {
              tab: Tabs.PATIENTS
            },
            resolve: {
              profile: PatientsResolver
            }
          },
          {
            path: 'research',
            component: ResearchComponent,
            data: {
              tab: Tabs.RESEARCH
            },
            resolve: {
              profile: ProfileResolver
            }
          }
        ]
      },
      {path: 'patients', component: PatientComponent, resolve: {patients: PatientsResolver}},
      {path: 'patients/create', component: PatientCreationComponent},
      {path: 'patients/:patientId', component: PatientDetailsComponent},
      {path: 'patients/:patientId/reports', component: PatientReportsComponent},
      {path: 'k-sads-pl/:reportId', component: KSadsPLComponent, resolve: {report: KSadsPlResolver}},
      {path: 'adhd-icd-10/:reportId', component: AdhdIcd10Component, resolve: {report: AdhdIcd10Resolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
