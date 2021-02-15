import { Component, OnInit,Input } from '@angular/core';
import { Instructor } from '../../interfaces/instructor';
import { InstructorMockService } from '../../services/instructor/instructor-mock.service';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {

  @Input() showInstructors: number = 4;
  instructors: Instructor[];
  classShowInstructor: number;
  constructor(

    private InstructorService: InstructorMockService

  ) { }

  ngOnInit(): void {
    this.fetchInstructors();
    this.classShowInstructor = 4
  }

  fetchInstructors(): void {
      this.InstructorService.getInstructors().subscribe(
        instructors => this.instructors = instructors
      )
    
  }

}
