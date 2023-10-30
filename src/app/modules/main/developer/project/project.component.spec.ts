import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: DeveloperProjectComponent;
  let fixture: ComponentFixture<DeveloperProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeveloperProjectComponent]
    });
    fixture = TestBed.createComponent(DeveloperProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
