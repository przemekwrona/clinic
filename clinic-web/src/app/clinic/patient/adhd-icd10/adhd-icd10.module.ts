import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdhdIcd10Component} from "./adhd-icd10.component";
import { AdhdIcd10QuestionComponent } from './adhd-icd10-question/adhd-icd10-question.component';
import {ReportService} from "../../../services/ReportService";
import {AdhdIcd10Resolver} from "./adhd-icd10.resolver";
import {TranslateModule} from "@ngx-translate/core";
import {SharedModule} from "../../../shared/shared.module";
import { AdhdIcd10QuestionsSummaryComponent } from './adhd-icd10-questions-summary/adhd-icd10-questions-summary.component';



@NgModule({
  declarations: [
    AdhdIcd10Component,
    AdhdIcd10QuestionComponent,
    AdhdIcd10QuestionsSummaryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    ReportService,
    AdhdIcd10Resolver
  ]
})
export class AdhdIcd10Module { }
