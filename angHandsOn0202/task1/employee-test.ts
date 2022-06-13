import {Employee} from './employee';
class EmployeeTest{
    employee:Employee;
    
    constructor(test){
        
        this.employee=test;
    }
}

let emp:EmployeeTest=new EmployeeTest({id:1, name:"John", salary:10000, permanent:true});

for(var key of Object.keys(emp.employee)){
    console.log(key + ": " + emp.employee[key]);
}