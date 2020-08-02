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
    return this.httpClient.get('./assets/contacts.json');
  }

}
