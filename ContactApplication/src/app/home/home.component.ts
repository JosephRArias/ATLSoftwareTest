import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { ContactsModel } from '../models/contact.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts : any = [];
  index: number;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    if(this.contacts.length === 0){
      this.contacts = this.dataService.getContacts();
    }
  }

}
