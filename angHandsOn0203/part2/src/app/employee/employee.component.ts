import { Component } from '@angular/core';
import { IEmployee } from './iemployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements IEmployee {
    title ="Employee Information";

    id=1001;
    name="John";
    salary=10000;   
    permanent=true;

    DisplayId(){
      return this.id; 
    }

    DisplayName(){
      return this.name; 
    }

    DisplaySalary(){
      return this.salary; 
    }

    DisplayPermanentOrNot(){
      return this.permanent; 
    }

  }
