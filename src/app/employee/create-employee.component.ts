import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { Department } from '../models/department.model';
import { Router } from  '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  employee : Employee = {
    id : null,
    name : null,
    gender : null,
    email  : '',
    phoneNumber : null,
    contactPreference : null,
    dateofbirth : null,
    department : "select",
    isActive : null,
    photopath : null 

  }
  departments : Department[] = [
    {id : 1, name: 'Help Desk'},
    {id : 2, name: 'Sales'},
    {id : 3, name: 'IT'},
    {id : 4, name: 'DevOps'}
  ]
  constructor( private _employeeService : EmployeeService,
               private _router : Router) { }

  togglePhotoPreview (){
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
  }
  saveEmployee () : void {
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
    

      //if(empForm.value.fullName !== undefined && empForm.value.email !== undefined){
        //location.href = "./list"

      }
  }


