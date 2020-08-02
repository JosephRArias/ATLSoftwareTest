import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ContactsModel } from '../models/contact.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts: ContactsModel[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getContacts()
    .subscribe(
      (contacts : ContactsModel[])=>{
        this.contacts = contacts;
      }
    );
  }

}
