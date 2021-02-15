import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CourseTopComponent } from './components/course-top/course-top.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { InstructorsTopComponent } from './components/instructors-top/instructors-top.component';



@NgModule({
  declarations: [CourseTopComponent, InstructorsComponent, CourseListComponent, InstructorsTopComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CourseTopComponent,
    InstructorsComponent,
    CourseListComponent
    
  ]
})
export class SharedModule { }
