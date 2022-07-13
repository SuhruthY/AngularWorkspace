import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './component/employee/employee.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './component/delete-employee/delete-employee.component';

const routes: Routes = [
  {path:"employees", component:EmployeeComponent},
  {path:"add", component:AddEmployeeComponent},
  {path:"update/:id", component:UpdateEmployeeComponent},
  {path:"delete/:id", component:DeleteEmployeeComponent},
  {path:"", redirectTo:"employees", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[
  EmployeeComponent,
  AddEmployeeComponent,
  UpdateEmployeeComponent,
  DeleteEmployeeComponent
]
