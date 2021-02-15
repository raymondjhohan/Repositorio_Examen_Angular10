import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent implements OnInit {

  contactForm: FormGroup;
  constructor(

    private router: Router, 
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {

    this.initForm();

  }

  initForm(): void {
    this.contactForm = this.fb.group({
      nombres: [null, Validators.required],
      email: [null, Validators.required],
      telefono: [null, Validators.required],
      comentario: [null, Validators.required]
    })
  }

  onsubmit() {
    if (this.contactForm.valid) {
      const nombres = this.contactForm.get('nombres').value;
      const email = this.contactForm.get('email').value;
      const telefono = this.contactForm.get('telefono').value;
      const comentario = this.contactForm.get('comentario').value;
    }
  }

}
