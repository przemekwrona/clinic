import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KSadsPLComponent} from "./k-sads-pl.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../../shared/shared.module";
import {ReportService} from "../../../services/ReportService";
import {KSadsPlResolver} from "./k-sads-pl.resolver";


@NgModule({
  declarations: [
    KSadsPLComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    ReportService,
    KSadsPlResolver
  ]
})
export class KSadsPLModule {
}
