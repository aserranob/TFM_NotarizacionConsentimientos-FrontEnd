import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgcCookieConsentService, NgcInitializeEvent, NgcStatusChangeEvent, NgcNoCookieLawEvent } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';
import {ConsentsService} from '../consents.service';

@Component({
  selector: 'app-consent-accept',
  templateUrl: './consent-accept.component.html',
  styleUrls: ['./consent-accept.component.css']
})
export class ConsentAcceptComponent implements OnInit, OnDestroy {
  ItemsContractArray = [];
  @Input() idContract: number;

 // keep refs to subscriptions to be able to unsubscribe later
  private popupOpenSubscription: Subscription;
  private popupCloseSubscription: Subscription;
  private initializeSubscription: Subscription;
  private statusChangeSubscription: Subscription;
  private revokeChoiceSubscription: Subscription;
  private noCookieLawSubscription: Subscription;
  constructor(private ccService: NgcCookieConsentService,
              private consentsService: ConsentsService) {}
  ngOnInit() {
    this.getDataConsent();
    // this.changeConsent();
    // subscribe to cookieconsent observables to react to main events
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });
    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });
    this.initializeSubscription = this.ccService.initialize$.subscribe(
      (event: NgcInitializeEvent) => {
        // you can use this.ccService.getConfig() to do stuff...
      });
    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {
        // you can use this.ccService.getConfig() to do stuff...
      });
    this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });
    this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
      (event: NgcNoCookieLawEvent) => {
        // you can use this.ccService.getConfig() to do stuff...
      });
  }
  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializeSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }

  changeConsent() {
    console.log(this.ItemsContractArray.length);
    this.ccService.getConfig().content = this.ccService.getConfig().content || {} ;
    if (this.ItemsContractArray.length > 0 ) {
      this.ccService.getConfig().content.message = this.ItemsContractArray[0].contractText;
      this.ccService.getConfig().content.header = this.ItemsContractArray[0].contractTitle;
    }
    this.ccService.getConfig().content.dismiss = 'cookie.dismiss';
    this.ccService.getConfig().content.allow = 'Aceptar';
    this.ccService.getConfig().content.deny = 'Denegar';
    this.ccService.getConfig().content.link = 'cookie.link';
    this.ccService.getConfig().content.policy = 'Política de privacidad';
    this.ccService.destroy(); // remove previous cookie bar (with default messages)
    this.ccService.init(this.ccService.getConfig()); // update config with translated messages
  }

  getDataConsent() {
    if (this.idContract > 0 ) {
      this.consentsService.getContract(this.idContract).subscribe((res: any[]) => {
        this.ItemsContractArray = res;
        this.changeConsent();
      });
    }
  }
}
