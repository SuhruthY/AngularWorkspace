import { Department } from "./department";

export interface Employee{
    id:number;
    name:String;
    salary:number;
    permanent:boolean;  
    department:Department;
}