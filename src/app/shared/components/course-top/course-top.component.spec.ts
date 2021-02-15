import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTopComponent } from './course-top.component';

describe('CourseTopComponent', () => {
  let component: CourseTopComponent;
  let fixture: ComponentFixture<CourseTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
