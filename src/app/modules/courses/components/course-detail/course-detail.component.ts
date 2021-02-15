import { Component, OnInit,Input } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course';
import { CourseMockService } from 'src/app/shared/services/course/course-mock.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  @Input() courseId;
  course: Course;
  constructor(
    
    private courseService: CourseMockService

  ) { }

  ngOnInit(): void {
    this.fetchCourse();
  }

  fetchCourse() {
    this.courseService.getCourse(this.courseId).subscribe(
      course => this.course = course
    )
  }

}
