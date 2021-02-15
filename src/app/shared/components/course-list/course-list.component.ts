import { Component, OnInit,Input } from '@angular/core';
import { Course } from '../../interfaces/course';
import { CourseMockService } from '../../services/course/course-mock.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {


  @Input() isFeatured: boolean = false;
  @Input() showCourses: number = 4;
  courses: Course[];
  classShowCourse: number;
  constructor(
    
    private courseService: CourseMockService

  ) { }

  ngOnInit(): void { 
    this.fetchCourses();
    this.classShowCourse = 12 / this.showCourses; 
  }

  fetchCourses(): void {
    if (this.isFeatured) {
      this.courseService.getFeaturedCourses().subscribe(
        courses => this.courses = courses
      )
    }else {
      this.courseService.getCourses().subscribe(
        courses => this.courses = courses
      )
    }
  }

}
