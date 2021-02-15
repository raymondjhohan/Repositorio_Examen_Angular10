import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-suscribe-form',
  templateUrl: './suscribe-form.component.html',
  styleUrls: ['./suscribe-form.component.scss']
})
export class SuscribeFormComponent implements OnInit {

  suscribeForm: FormGroup;
  constructor(

    private router: Router, 
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    
    this.initForm();
  }

  initForm(): void {
    this.suscribeForm = this.fb.group({
      email: [null, Validators.required],    
    })
  }

  onsubmit() {
    if (this.suscribeForm.valid) {
      const username = this.suscribeForm.get('email').value;
    }
  }

}
