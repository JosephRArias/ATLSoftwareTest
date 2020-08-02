import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts : any = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.contacts = this.dataService.getContacts();
    console.log(this.contacts);
  }

}
