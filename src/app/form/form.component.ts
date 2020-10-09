
import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Datas} from '../data/model/datas';
import {DatasService} from '../data/service/datas.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  size: number; users = [];
  x = 0;

  userForm = this.builder.group({
    phone: ['', [Validators.required, Validators.pattern('[1-9][0-9][0-9][1-9][0-9][0-9][0-9][0-9][0-9][0-9]')]],
    firstName:['',[Validators.required]],
    lastName: ['',[Validators.required]],
    email: ['', [Validators.required,Validators.email]]
  })

  get phone(): AbstractControl{return this.userForm.get('phone');}
  get firstName(): AbstractControl{return this.userForm.get('firstName');}
  get lastName(): AbstractControl{return this.userForm.get('lastName');}
  get email(): AbstractControl{return this.userForm.get('email')}


  constructor(private builder: FormBuilder, 
              private dataService: DatasService) { }

  onSubmit():void{
    const user = new Datas(Number(this.userForm.value.phone),
    this.userForm.value.firstName,
    this.userForm.value.lastName,
    this.userForm.value.email);
    //console.log("Phone" + Number(this.userForm.value.phone));
    this.dataService.getPhone();
    //this.dataService.getUser(this.userForm.value.phone);
    console.log("user.phone" + user.phone);
    this.dataService.addUser(user);
    this.ngOnInit();
    this.userForm.reset();
    
  }

  ngOnInit(): void {
 
    var tmp = this.dataService.getUsers();
    // for (var i = 0; i<tmp.length; i++){
      this.users.push(tmp[this.x]);
      this.x = this.x + 1;
    //}
    //this.users.push(tmp[0]);
}
}
