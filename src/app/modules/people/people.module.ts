import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { PeopleRoutingModule } from './people-routing.module';
import { ContactsFormPageComponent } from './pages/contacts-form-page/contacts-form-page.component';

import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';

@NgModule({
  declarations: [
    ContactsFormPageComponent,
    ContactsFormComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    ReactiveFormsModule
  ]
})
export class PeopleModule { }
