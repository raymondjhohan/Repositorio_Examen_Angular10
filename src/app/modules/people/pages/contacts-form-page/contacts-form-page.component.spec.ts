import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsFormPageComponent } from './contacts-form-page.component';

describe('ContactsFormPageComponent', () => {
  let component: ContactsFormPageComponent;
  let fixture: ComponentFixture<ContactsFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
