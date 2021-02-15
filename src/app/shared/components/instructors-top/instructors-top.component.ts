import { Component, OnInit,Input } from '@angular/core';
import { Instructor } from '../../interfaces/instructor';

@Component({
  selector: 'app-instructors-top',
  templateUrl: './instructors-top.component.html',
  styleUrls: ['./instructors-top.component.scss']
})
export class InstructorsTopComponent implements OnInit {

  @Input() instructor: Instructor;
  constructor() { }

  ngOnInit(): void {
  }

}
