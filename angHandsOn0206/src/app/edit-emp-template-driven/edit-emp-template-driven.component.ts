import { Component, OnInit } from '@angular/core';
import { Employee } from '../view-emp/employee';

@Component({
  selector: 'app-edit-emp-template-driven',
  templateUrl: './edit-emp-template-driven.component.html',
  styleUrls: ['./edit-emp-template-driven.component.css']
})
export class EditEmpTemplateDrivenComponent implements OnInit {

  departments = [
    { id: 1, name: "Payroll" },
    { id: 2, name: "Internal" },
    { id: 3, name: "HR" }
  ];

  emp:Employee = {
    id:1, 
    name:"John", 
    salary:10000, 
    permanent:true,
    department:this.departments[0],
    skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"JavaScript"}],
    dob:new Date('12/31/2000')
  };


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value:any){

    console.log(value);

  }

}
