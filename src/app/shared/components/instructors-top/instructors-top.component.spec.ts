import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsTopComponent } from './instructors-top.component';

describe('InstructorsTopComponent', () => {
  let component: InstructorsTopComponent;
  let fixture: ComponentFixture<InstructorsTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorsTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
