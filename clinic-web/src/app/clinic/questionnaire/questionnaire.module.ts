import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    QuestionnaireComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class QuestionnaireModule { }
