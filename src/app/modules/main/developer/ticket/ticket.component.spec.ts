import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperTicketComponent } from './ticket.component';

describe('TicketComponent', () => {
  let component: DeveloperTicketComponent;
  let fixture: ComponentFixture<DeveloperTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeveloperTicketComponent]
    });
    fixture = TestBed.createComponent(DeveloperTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
