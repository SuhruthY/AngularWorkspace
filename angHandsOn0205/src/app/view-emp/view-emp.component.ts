import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {

  emp: Employee={
    id:1, 
    name:"John", 
    salary:10000, 
    permanent:true, // Display Yes
    // permanent:false, // Display No
    department:{id:1,name:"payroll"},
    skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"JavaScript"}],
    dob:new Date('12/31/2000')
  };

  constructor() { }

  ngOnInit(): void {
  }

}
