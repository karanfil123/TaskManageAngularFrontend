import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: AdminTaskComponent;
  let fixture: ComponentFixture<AdminTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTaskComponent]
    });
    fixture = TestBed.createComponent(AdminTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
