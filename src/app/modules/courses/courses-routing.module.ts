import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListPageComponent } from './pages/course-list-page/course-list-page.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: CourseListPageComponent
  },
  {
    path: ':id',
    component: CourseDetailPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
