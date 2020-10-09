import { Injectable } from '@angular/core';
import {Datas} from '../model/datas';

@Injectable({
  providedIn: 'root'
})
export class DatasService {
  private users = [
    new Datas(1234567890,'Henry','Chen','henrytest@gmail.com')

  ]
  constructor() { }

  public getUser(phone: string): Datas{
    console.log(this.users.find(users => users.phone === Number.parseInt(phone)));
    return this.users.find(users => users.phone === Number.parseInt(phone));
  }

  public addUser(b: Datas): void{
    console.log("ADDED USER" +b);
    this.users.push(b);
    this.getUsers();
    console.log("After added " + this.users);
  }

  public getPhone(): Number[]{
    let phoneNumber: Number[];
    phoneNumber = []; 
    for (var i = 0; i<this.users.length; i++){
      phoneNumber.push(this.users[i].phone)
    }
    console.log("getPhone() " + phoneNumber);
    return phoneNumber;
  }

  public getUsers(): Datas[]{
    console.log(this.users);
    return this.users;
  //   var tmp: Datas[];
  //   tmp = [];
  //   for (var i = 0; i<this.users.length; i++){
  //     // tmp.push(this.users[i]);
  //     var tmp_user = this.getUser(String(this.users[i].phone));
  //     tmp.push(tmp_user);
  //   }
  //   console.log("getUsers() " + tmp[1]);
  //   return tmp;
   }
}
