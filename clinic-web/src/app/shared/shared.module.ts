import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {ModalModule} from "ngx-bootstrap/modal";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from '@angular/router';
import {AccordionModule} from "ngx-bootstrap/accordion";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class SharedModule {
}
