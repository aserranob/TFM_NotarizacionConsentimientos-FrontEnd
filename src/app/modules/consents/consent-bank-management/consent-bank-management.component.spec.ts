import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentBankManagementComponent } from './consent-bank-management.component';

describe('ConsentBankManagementComponent', () => {
  let component: ConsentBankManagementComponent;
  let fixture: ComponentFixture<ConsentBankManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentBankManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentBankManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
