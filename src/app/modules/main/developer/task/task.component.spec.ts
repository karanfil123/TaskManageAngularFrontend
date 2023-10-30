import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperTaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: DeveloperTaskComponent;
  let fixture: ComponentFixture<DeveloperTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeveloperTaskComponent]
    });
    fixture = TestBed.createComponent(DeveloperTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
