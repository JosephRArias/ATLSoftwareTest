import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  formArray: FormArray;
  Contact = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    Email: new FormControl('',[Validators.required, Validators.email]),
    PhoneNumber: new FormArray([new FormControl('')], [Validators.required, Validators.pattern('^[0-9]*$')])
      });
  constructor() {
    this.formArray = this.Contact.get('PhoneNumber') as FormArray;

  }

  ngOnInit() {
  }
  onSubmit(){

  }
}
