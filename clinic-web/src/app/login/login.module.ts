import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { LoginService } from "../services/LoginService";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule {
}
