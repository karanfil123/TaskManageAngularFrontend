import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketComponent } from './ticket.component';

describe('TicketComponent', () => {
  let component: AdminTicketComponent;
  let fixture: ComponentFixture<AdminTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTicketComponent]
    });
    fixture = TestBed.createComponent(AdminTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
