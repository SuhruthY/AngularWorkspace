import {Employee} from './employee';

class EmployeeTest{
    employee:Employee;
    
    constructor(test){
        
        this.employee=test;
    }
}

let emp:EmployeeTest=new EmployeeTest({id:1, name:"John", salary:10000, permanent:true, department:{id:1,name:"payroll"}});

for(var key of Object.keys(emp.employee)){
    if(key !== "department") console.log(key + ": " + emp.employee[key]);
    else for(var deptKey of Object.keys(emp.employee[key])){
        console.log(key + " " + deptKey + ": " + emp.employee["department"][deptKey]);
    }
}