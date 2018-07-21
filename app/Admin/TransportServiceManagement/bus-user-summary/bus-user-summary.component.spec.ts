import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusUserSummaryComponent } from './bus-user-summary.component';

describe('BusUserSummaryComponent', () => {
  let component: BusUserSummaryComponent;
  let fixture: ComponentFixture<BusUserSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusUserSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusUserSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
