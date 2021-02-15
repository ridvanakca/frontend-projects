import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // this root form group defines our form model
  public blogForm: FormGroup;
  

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    // initializing form model
    this.blogForm = this.fb.group({
      name: ['', [Validators.required, this.notIncludeNumber]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    })

  }

  notIncludeNumber(c: AbstractControl): { [key: string]: boolean } | null {
    let regex = /^[A-Za-z]+$/;
    if( !regex.test(c.value) ) {
      return {'letters': true}; //invalid
    }
    return null; //valid
  }

  submitForm() {
    alert(`Hi ${this.blogForm.get('name').value}! Your message ( ${this.blogForm.get('message').value} ) is successfully sent. I will send my reply as soon as possible to your email ( ${this.blogForm.get('email').value} )` );
  }

}
