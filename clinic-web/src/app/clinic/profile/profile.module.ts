import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {OverviewComponent} from './overview/overview.component';
import {PatientComponent} from './patient/patient.component';
import {ResearchComponent} from './research/research.component';
import {RouterModule} from "@angular/router";
import {ProfileResolver} from "./profile.resolver";
import {SharedModule} from "../../shared/shared.module";
import {ProfileService} from "../../services/ProfileService";
import { ProjectItemComponent } from './research/project-item/project-item.component';
import {PatientsResolver} from "./patient/patient.resolver";
import {OverviewResolver} from "./overview/overview.resolver";
import {UserService} from "../../services/UserService";


@NgModule({
  declarations: [
    ProfileComponent,
    OverviewComponent,
    PatientComponent,
    ResearchComponent,
    ProjectItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  providers: [
    ProfileService,
    UserService,
    ProfileResolver,
    PatientsResolver,
    OverviewResolver
  ]
})
export class ProfileModule {
}
