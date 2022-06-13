import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // define property favoriteMovie
  favoriteMovie="Lord of the Rings";

  // define property Employee
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

}
