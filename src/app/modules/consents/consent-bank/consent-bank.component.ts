import { Component, OnInit } from '@angular/core';
import {ConsentsService} from '../consents.service';
import { ContractsUsers } from '../domain/contracts-users';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-consent-bank',
  templateUrl: './consent-bank.component.html',
  styleUrls: ['./consent-bank.component.css']
})
export class ConsentBankComponent implements OnInit {
  ipAddress = '';
  idContract: string;
  formGroup: FormGroup;
  constructor(
    private consentsService: ConsentsService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getIPAddress();
    this.idContract = '1';
    this.formGroup = new FormGroup({
      user: new FormControl(null),
      password: new FormControl(null)
    });
  }

  AcceptForm() {
    if (this.idContract !== '' ) {
      const contractUser = this.generatePayload();
      this.consentsService.addContractsUsers(contractUser).then(() => {
       alert('Correcto');
      })
      .catch((error: HttpErrorResponse) => {
        alert('Error' + error);
      });
    }
  }
  generatePayload(): ContractsUsers {
    this.getIPAddress();
    const list: ContractsUsers = new ContractsUsers();
    const controlsForm = this.formGroup.controls;

    list.accepted = true;
    list.contractID = this.idContract; // FALTA PONER AQUÍ SI ES EL ID QUE CORRESPONDA AL CHECKBOX
    list.contractText = 'FALTA PONER AQUÍ EL TEXTO DEL FALDÓN O DEL CHECKBOX';
    list.userIP = this.ipAddress;
    list.userName = controlsForm.user.value;

    return list;
  }

  getIPAddress() {
    this.http.get('http://api.ipify.org/?format=json').subscribe((res: any) => {
      this.ipAddress = res.ip;
    });
  }

}
