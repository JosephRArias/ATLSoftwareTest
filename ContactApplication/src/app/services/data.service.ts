import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactsModel } from '../models/contact.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: ContactsModel[] = [];
  constructor(private httpClient: HttpClient) {
  }
  getContacts() {
    this.httpClient.get('./assets/contacts.json').subscribe(res => {
      if(this.data.length === 0){
        for (const id in res) {
          let contact: ContactsModel;
          this.data.push(res[id]);
        }
      }
    });
    return this.data;
  }
  addNewContact(data: ContactsModel) {
    this.data.push(data);
  }
  findContact(index: number) {
    let Contact: ContactsModel = this.data[index];
    return Contact;
  }
  modifyContact(index: number, contact: ContactsModel){
    this.data[index] = contact;
  }

}
