import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTopbarComponent } from './content-topbar.component';

describe('ContentTopbarComponent', () => {
  let component: ContentTopbarComponent;
  let fixture: ComponentFixture<ContentTopbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentTopbarComponent]
    });
    fixture = TestBed.createComponent(ContentTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
