import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login/login.component';
import { ConsentBankComponent } from './modules/consents/consent-bank/consent-bank.component';
import { ConsentBankManagementComponent } from './modules/consents/consent-bank-management/consent-bank-management.component';
import { ConsentListComponent } from './modules/consents/consent-list/consent-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'consentBank', component: ConsentBankComponent },
  { path: 'consentList', component: ConsentListComponent },
  { path: 'consentBankManagement', component: ConsentBankManagementComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
