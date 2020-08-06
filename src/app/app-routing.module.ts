import { DepartmentComponent } from './department/department.component';
import { StudentComponent } from './student/student.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"department",component:DepartmentComponent},
  {path:'student',component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[DepartmentComponent,StudentComponent]