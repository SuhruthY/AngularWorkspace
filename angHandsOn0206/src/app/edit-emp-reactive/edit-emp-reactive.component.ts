import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../view-emp/employee';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
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
  
  empForm = new FormGroup({
    name: new FormControl(this.emp.name, [
      Validators.required, 
      Validators.minLength(4), 
      Validators.maxLength(20)
    ]),
    salary: new FormControl(this.emp.salary, Validators.required),
    permanent: new FormControl(this.emp.permanent),
    department: new FormControl(this.emp.department),
  });

  // getters
  get name() { return this.empForm.get('name'); }
  get salary() { return this.empForm.get('salary'); }
  get permanent() { return this.empForm.get('permanent'); }
  get department() { return this.empForm.get('department'); }

  onSubmit(){
    console.log(this.empForm.value);
  }

}
