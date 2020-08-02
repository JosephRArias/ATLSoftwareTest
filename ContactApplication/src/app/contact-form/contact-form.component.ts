import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  formArray: FormArray;
  Contact = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    phoneNumber: new FormArray([new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}'), Validators.minLength(10),
    Validators.maxLength(10)])]),
    address: new FormControl('', [Validators.required, Validators.minLength(6)])
      });
  constructor(private dataService: DataService, private router: Router) {
    this.formArray = this.Contact.get('phoneNumber') as FormArray;
  }

  ngOnInit() {
    console.log(this.Contact.invalid);
  }
  onSubmit(){
    let data = this.Contact.value;
    this.dataService.addNewContact(data);
    this.router.navigate(['/']);
  }
  AddPhoneNumber(){
    this.formArray.push(new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}'),
    Validators.minLength(10), Validators.maxLength(10)]));
  }
}
