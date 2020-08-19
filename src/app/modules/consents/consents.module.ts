import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsentAcceptComponent } from './consent-accept/consent-accept.component';
import {NgcCookieConsentModule} from 'ngx-cookieconsent';
import { ConsentListComponent } from './consent-list/consent-list.component';
import { ConsentBankComponent } from './consent-bank/consent-bank.component';
import { ConsentBankManagementComponent } from './consent-bank-management/consent-bank-management.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ConsentAcceptComponent,
    ConsentListComponent,
    ConsentBankComponent,
    ConsentBankManagementComponent,
    ConsentBankManagementComponent],
  imports: [
    CommonModule,
    NgcCookieConsentModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConsentsModule { }
