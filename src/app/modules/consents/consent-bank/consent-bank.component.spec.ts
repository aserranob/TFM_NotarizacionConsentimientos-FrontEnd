import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentBankComponent } from './consent-bank.component';

describe('ConsentBankComponent', () => {
  let component: ConsentBankComponent;
  let fixture: ComponentFixture<ConsentBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
