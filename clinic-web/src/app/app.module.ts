import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ClinicModule} from "./clinic/clinic.module";
import {SharedModule} from "./shared/shared.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {RegisterModule} from "./register/register.module";
import {LoginModule} from "./login/login.module";
import {AuthenticationInterceptor} from "./services/AuthenticationInterceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: ((http: HttpClient) => {
          return new TranslateHttpLoader(http, './assets/i18n/', '.json');
        }),
        deps: [HttpClient],
      },
      defaultLanguage: 'en-US',
    }),
    ClinicModule,
    RegisterModule,
    LoginModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true,
  }],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
