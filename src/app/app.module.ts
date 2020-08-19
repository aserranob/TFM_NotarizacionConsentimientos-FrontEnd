import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginModule } from './modules/login/login.module';

import { LoginService } from './modules/login/login/login.service';
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';
import { ConsentAcceptComponent } from './modules/consents/consent-accept/consent-accept.component';
import { ConsentListComponent } from './modules/consents/consent-list/consent-list.component';
import { ConsentBankComponent } from './modules/consents/consent-bank/consent-bank.component';
import { ConsentBankManagementComponent } from './modules/consents/consent-bank-management/consent-bank-management.component';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out'
};

@NgModule({
  declarations: [
    AppComponent,
    ConsentAcceptComponent,
    ConsentListComponent,
    ConsentBankComponent,
    ConsentBankManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    LoginModule,
    ReactiveFormsModule.withConfig({
      warnOnNgModelWithFormControl: 'never'
    })
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
