import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeadTicketComponent } from './ticket.component';

describe('TicketComponent', () => {
  let component: TeamLeadTicketComponent;
  let fixture: ComponentFixture<TeamLeadTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamLeadTicketComponent]
    });
    fixture = TestBed.createComponent(TeamLeadTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
