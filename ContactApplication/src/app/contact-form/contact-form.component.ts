import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsModel } from '../models/contact.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  formArray: FormArray;
  contact: ContactsModel;
  index: number;
  Contact = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    phoneNumber: new FormArray([new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}'), Validators.minLength(10),
    Validators.maxLength(10)])]),
    address: new FormControl('')
      });
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    this.formArray = this.Contact.get('phoneNumber') as FormArray;
  }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    if(this.index){
      this.contact = this.dataService.findContact(this.index);
      this.Contact.patchValue({
        name: this.contact.name,
        email: this.contact.email,
        phoneNumber: this.contact.phoneNumber,
        address: this.contact.address
      });
    }
  }
  onSubmit(){
    let data = this.Contact.value;
    if(this.index){
      this.dataService.modifyContact(this.index,data);
      swal.fire('Contact Updated', 'Changes applied', 'success');
    }
    else{
      this.dataService.addNewContact(data);
      swal.fire('Contact Added', 'Contact added successfully', 'success');
    }
    this.router.navigate(['/']);
  }
  discardData(){
    swal.fire({
      title: `Are you sure you wanna discard changes?`,
      icon: `question`,
      showCancelButton:true,
      showConfirmButton: true
    }).then(res=>{
      if(res.value){
        this.router.navigate(['/']);
      }
    });
  }
  AddPhoneNumber(){
    this.formArray.push(new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}'),
    Validators.minLength(10), Validators.maxLength(10)]));
  }
}