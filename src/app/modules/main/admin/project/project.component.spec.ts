import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: AdminProjectComponent;
  let fixture: ComponentFixture<AdminProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProjectComponent]
    });
    fixture = TestBed.createComponent(AdminProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
