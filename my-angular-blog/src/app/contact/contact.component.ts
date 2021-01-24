import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // this root form group defines our form model
  blogForm: FormGroup;
  // data model
  blogUser: User;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    // initializing form model
    this.blogForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    })

  }

  submitForm() {
    alert('form is submitted');
  }

}
