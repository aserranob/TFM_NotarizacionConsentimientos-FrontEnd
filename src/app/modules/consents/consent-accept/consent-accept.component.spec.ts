import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentAcceptComponent } from './consent-accept.component';

describe('ConsentAcceptComponent', () => {
  let component: ConsentAcceptComponent;
  let fixture: ComponentFixture<ConsentAcceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentAcceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
