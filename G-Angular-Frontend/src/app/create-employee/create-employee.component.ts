import { Component } from '@angular/core';
import { EmployeeService } from '../Employee-Service/employee.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent  {

  createEmployeeForm !: FormGroup

  constructor(private es:EmployeeService){}

  ngOnInit(){
    this.createEmployeeForm = new FormGroup({
  id : new FormControl(''),
  firstName : new FormControl(''),
  lastName : new FormControl(''),
  role: new FormControl(''),
  emailId:new FormControl('')

    })
  }

  createNewEmployee(){
   this.es.createEmployee(this.createEmployeeForm.value)
  }
}