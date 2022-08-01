import { Route, RouterModule } from '@angular/router';
import { EmployeeElementComponent } from './components/employee-list/employee-element/employee-element.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeUpdateFormComponent } from './components/employee-update-form/employee-update-form.component';
import { EmployeeCreateFormComponent } from './components/employee-create-form/employee-create-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListPageComponent } from './components/pages/employee-list-page/employee-list-page.component';
import { EmployeeCreatePageComponent } from './components/pages/employee-create-page/employee-create-page.component';
import { EmployeeUpdatePageComponent } from './components/pages/employee-update-page/employee-update-page.component';
import { EmployeeDetailsPageComponent } from './components/pages/employee-details-page/employee-details-page.component';

const routes: Route[] = [
  {path:'', component: EmployeeListPageComponent},
  {path:'create', component: EmployeeCreatePageComponent},
  {path:':id/update', component: EmployeeUpdatePageComponent},
  {path:':id', component: EmployeeDetailsPageComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeesRoutingModule { }
