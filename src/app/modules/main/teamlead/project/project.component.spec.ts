import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeadProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: TeamLeadProjectComponent;
  let fixture: ComponentFixture<TeamLeadProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamLeadProjectComponent]
    });
    fixture = TestBed.createComponent(TeamLeadProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
