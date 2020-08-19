import { Component, OnInit } from '@angular/core';
import {ConsentsService} from '../consents.service';

@Component({
  selector: 'app-consent-bank-management',
  templateUrl: './consent-bank-management.component.html',
  styleUrls: ['./consent-bank-management.component.css']
})
export class ConsentBankManagementComponent implements OnInit {
  ItemsArray = [];

  constructor(
    private consentsService: ConsentsService
  ) { }

  ngOnInit() {
    this.getSignedContracts();
  }


  getSignedContracts() {
    this.consentsService.getSignedContractsUsers().subscribe((res: any[]) => {
      this.ItemsArray = res;
    });
  }
}
