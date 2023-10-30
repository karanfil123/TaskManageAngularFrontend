import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeadRoomComponent } from './room.component';

describe('RoomComponent', () => {
  let component: TeamLeadRoomComponent;
  let fixture: ComponentFixture<TeamLeadRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamLeadRoomComponent]
    });
    fixture = TestBed.createComponent(TeamLeadRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
