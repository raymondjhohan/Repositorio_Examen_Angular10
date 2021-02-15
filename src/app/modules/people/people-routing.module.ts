import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsFormPageComponent } from './pages/contacts-form-page/contacts-form-page.component';

const routes: Routes = [

  {
    path: '',
    component: ContactsFormPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
