import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultUserProfilePageComponent } from './default-user-profile-page.component';

describe('DefaultUserProfilePageComponent', () => {
  let component: DefaultUserProfilePageComponent;
  let fixture: ComponentFixture<DefaultUserProfilePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultUserProfilePageComponent]
    });
    fixture = TestBed.createComponent(DefaultUserProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
