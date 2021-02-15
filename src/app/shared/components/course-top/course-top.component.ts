import { Component, OnInit,Input } from '@angular/core';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-course-top',
  templateUrl: './course-top.component.html',
  styleUrls: ['./course-top.component.scss']
})
export class CourseTopComponent implements OnInit {

  @Input() course: Course;
  constructor() { }

  ngOnInit(): void {
  }

}
