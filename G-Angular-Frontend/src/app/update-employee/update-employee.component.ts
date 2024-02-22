import { Component} from '@angular/core';
import { EmployeeService } from '../Employee-Service/employee.service';
import { ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent  {

  id !: number
  employee = ""
  editEmployeeForm !: FormGroup

  constructor(private employeeService: EmployeeService,private route: ActivatedRoute) { }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];

    this.editEmployeeForm = new FormGroup({
       id: new FormControl('',[Validators.required]),
       firstName: new FormControl('',[Validators.required]),
       lastName: new FormControl('',[Validators.required]),
       role: new FormControl('',[Validators.required]),
       emailId: new FormControl('',[Validators.required])
       
     })

    this.employeeService.getEmployeeById(this.id).subscribe(x => this.editEmployeeForm.patchValue(x))
  }

editEmployee(){
  this.employeeService.updateEmployee(this.editEmployeeForm.value)
}
}