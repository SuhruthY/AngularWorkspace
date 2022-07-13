import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/class/employee';


@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  employee!:Employee;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onDelete(){
    
  }

  onCancel(){
    this.router.navigate(["employees"]);
  }

}
