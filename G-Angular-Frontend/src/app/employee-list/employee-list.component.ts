import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Employee-Service/employee.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees :any[]=[]
  
  

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(){
    this.employeeService.getEmployeesList().subscribe((data:any)=>{
      this.employees=data
    });
  }

  

  

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      this.employees = this.employees.filter(item => item.id !== id)
    })
  }
}