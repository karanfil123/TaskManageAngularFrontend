import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperRoomComponent } from './room.component';

describe('RoomComponent', () => {
  let component: DeveloperRoomComponent;
  let fixture: ComponentFixture<DeveloperRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeveloperRoomComponent]
    });
    fixture = TestBed.createComponent(DeveloperRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
