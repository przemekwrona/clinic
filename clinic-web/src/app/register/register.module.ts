import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { SharedModule } from "../shared/shared.module";
import { RegisterService } from "../services/RegisterService";

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    RegisterService
  ]
})
export class RegisterModule {
}
