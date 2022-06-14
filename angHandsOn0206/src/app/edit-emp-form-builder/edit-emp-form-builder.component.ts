import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Employee } from '../view-emp/employee';

@Component({
  selector: 'app-edit-emp-form-builder',
  templateUrl: './edit-emp-form-builder.component.html',
  styleUrls: ['./edit-emp-form-builder.component.css']
})
export class EditEmpFormBuilderComponent implements OnInit {

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

  empForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.empForm = this.formBuilder.group({
      name: [this.emp.name, [
        Validators.required, 
        Validators.minLength(4), 
        Validators.maxLength(20)
      ]],
      salary: [this.emp.salary, Validators.required],
      permanent: [this.emp.permanent],
      department: [this.emp.department],
      skills: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    });
  }

  // getters
  get name() { return this.empForm.get('name'); }
  get salary() { return this.empForm.get('salary'); }
  get permanent() { return this.empForm.get('permanent'); }
  get department() { return this.empForm.get('department'); }
  get skills() { return this.empForm.get('skills') as FormArray; }

  addskill() { this.skills.push(this.formBuilder.control('')); }

  onSubmit(){
    console.log(this.empForm.value);
  }

}
