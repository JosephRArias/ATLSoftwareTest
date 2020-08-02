import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactsModel } from '../models/contact.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: ContactsModel [] = [];
  constructor(private httpClient: HttpClient) {
  }
  getContacts(){
    this.httpClient.get('./assets/contacts.json').subscribe(res =>
    {
      for(const id in res){
        this.data.push(res[id]);
      }
    });
    return this.data;
  }
  addNewContact(data: ContactsModel){
    this.data.push(data);
  }

}
