import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeCreateFormComponent } from './components/employee-create-form/employee-create-form.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeElementComponent } from './components/employee-list/employee-element/employee-element.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeUpdateFormComponent } from './components/employee-update-form/employee-update-form.component';
import { EmployeeCreatePageComponent } from './components/pages/employee-create-page/employee-create-page.component';
import { EmployeeDetailsPageComponent } from './components/pages/employee-details-page/employee-details-page.component';
import { EmployeeListPageComponent } from './components/pages/employee-list-page/employee-list-page.component';
import { EmployeeUpdatePageComponent } from './components/pages/employee-update-page/employee-update-page.component';
import { EmployeesRoutingModule } from './employees-routing.module';



@NgModule({
  declarations: [
    EmployeeCreateFormComponent,
    EmployeeUpdateFormComponent,
    EmployeeListComponent,
    EmployeeElementComponent,
    EmployeeListPageComponent,
    EmployeeCreatePageComponent,
    EmployeeUpdatePageComponent,
    EmployeeDetailsPageComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EmployeesModule { }
