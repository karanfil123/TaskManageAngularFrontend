import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeadTaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TeamLeadTaskComponent;
  let fixture: ComponentFixture<TeamLeadTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamLeadTaskComponent]
    });
    fixture = TestBed.createComponent(TeamLeadTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
