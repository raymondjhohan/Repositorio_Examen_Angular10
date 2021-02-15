import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Course } from '../../interfaces/course';
import { coursesMock } from '../../mocks/courses.mocks';

@Injectable({
  providedIn: 'root'
})
export class CourseMockService {

  constructor() { }

  getCourses(): Observable<Course[]> {
    return new Observable(observer => {
      observer.next(coursesMock);
    });
  }

  getFeaturedCourses(): Observable<Course[]> {
    return new Observable(observer => {
      const featuredCourses: Course[] = coursesMock.filter(course => course.featured === true);
      observer.next(featuredCourses);
      setTimeout(() => {
        observer.next(coursesMock);
      }, 50000);
    });
  }

  getCourse(id: number): Observable<Course> {
    return new Observable(observer => {
      const course: Course =coursesMock.find(course => course.id === id);
      observer.next(course);
    });
  }

}
