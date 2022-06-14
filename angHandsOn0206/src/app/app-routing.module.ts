import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmpFormBuilderComponent } from './edit-emp-form-builder/edit-emp-form-builder.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { QtyIncComponent } from './qty-inc/qty-inc.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';

const routes: Routes = [
  {path:"view-employee", component:ViewEmpComponent},
  {path:"edit-employee", component:EditEmpComponent},
  {path:"edit-employee-template-driven", component:EditEmpTemplateDrivenComponent},
  {path:"edit-employee-reactive", component:EditEmpReactiveComponent},
  {path:"edit-employee-form-builder", component:EditEmpFormBuilderComponent},
  {path:"quantity-increment", component:QtyIncComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[
  ViewEmpComponent, 
  EditEmpComponent, 
  QtyIncComponent,
  EditEmpTemplateDrivenComponent,
  EditEmpReactiveComponent,
  EditEmpFormBuilderComponent,
]
