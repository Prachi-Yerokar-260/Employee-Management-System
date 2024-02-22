import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Guards/auth.guard';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"Home",component:HomeComponent,canActivate:[AuthGuard]},
  {path: 'EmployeesList', component: EmployeeListComponent,canActivate:[AuthGuard]},
  {path: 'AddEmployee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'UpdateEmployee/:id', component: UpdateEmployeeComponent},
  {path: 'EmployeeDetails/:id', component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }