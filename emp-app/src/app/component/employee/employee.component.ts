import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Employee } from 'src/app/class/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:Employee[]=[];

  constructor(private service:EmployeeService, private router:Router) { 

  }

  ngOnInit(): void {
    this.service.getEmployees().subscribe(
      data=>console.log(data),
      error=> console.log(error)
    );
  }

  onClick(){
    this.router.navigate(["/add"]);
  }

}
