import { Component, OnInit } from '@angular/core';
import {ConsentsService} from '../consents.service';

@Component({
  selector: 'app-consent-list',
  templateUrl: './consent-list.component.html',
  styleUrls: ['./consent-list.component.css']
})
export class ConsentListComponent implements OnInit {
  ItemsArray = [];

  constructor(
    private consentsService: ConsentsService
  ) { }

  ngOnInit() {
    this.listContracts();
  }

  listContracts() {
    this.consentsService.getContracts().subscribe((res: any[]) => {
      this.ItemsArray = res;
    });
  }
}
