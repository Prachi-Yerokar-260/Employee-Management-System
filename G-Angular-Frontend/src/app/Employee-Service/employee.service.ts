import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8032/api/";

  constructor(private httpClient: HttpClient, private router:Router) { }
  
  getEmployeesList(){
    return this.httpClient.get(this.baseURL+'employees');
  }

  createEmployee(employee: {id:number,firstName:string,lastName:string,role:string,emailId:string}){
    return this.httpClient.post(`${this.baseURL +'AddEmployee'}`, employee).subscribe(()=>{
      this.router.navigateByUrl('/EmployeesList')
    });
  }

  getEmployeeById(id: number){
    return this.httpClient.get(`${this.baseURL +'employees'}/${id}`);
  }

  updateEmployee(employee:{id: number,firstName: string,lastName: string,role: string,emailId:string}){
    return this.httpClient.put(`${this.baseURL + 'UpdateEmployees'}/${employee.id}`, employee)
    .subscribe((res:any)=>{
      this.router.navigateByUrl('/EmployeesList');
    });
  }

  deleteEmployee(id: number){
    return this.httpClient.delete(`${this.baseURL+'employees'}/${id}`);
  }

 

 
}