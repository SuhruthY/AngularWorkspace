import {Employee} from './employee';

class EmployeeTest{
    employee:Employee;
    
    constructor(test){
        
        this.employee=test;
    }
}

let emp:EmployeeTest=new EmployeeTest({
    id:1, 
    name:"John", 
    salary:10000, 
    permanent:true, 
    department:{id:1,name:"payroll"},
    skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"JavaScript"}]
});

for(var key of Object.keys(emp.employee)){
    if(key === "department") for(var deptKey of Object.keys(emp.employee[key])){
        console.log(key + " " + deptKey + ": " + emp.employee["department"][deptKey]);
    }
    else if (key === "skills") for(var i of [0, 1,2]){
        console.log("skill[" + i +"]:" + emp.employee["skills"][i].id  + ", " + emp.employee["skills"][i].name);
    }
    else console.log(key + ": " + emp.employee[key]);
}