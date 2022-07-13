import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'; 
import { Employee } from 'src/app/class/employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee!:Employee;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

  onCancel(){
    this.router.navigate(["employees"]);
  }

}
