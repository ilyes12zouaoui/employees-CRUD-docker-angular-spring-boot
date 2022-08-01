import { NotificationService } from './../../../core/services/notification.service';
import { EmployeeModel } from './../../../core/models/EmployeeModel';
import { EmployeeService } from '../../../core/services/employees.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  isLoading: boolean = true;
  employees: EmployeeModel[] = [];
  constructor(private employeeService: EmployeeService, private notificationService: NotificationService) {}

  ngOnInit() {
    this.getEmployees()
    this.employeeService.employeesChanged.subscribe(()=>this.getEmployees())
  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe({
      next: (employees) => {
        this.stopLoading();
        this.employees = employees;
      },
      error: (err) => {
        this.stopLoading();
        this.notificationService.showErrorNotification("connection error occurred");
      },
      complete: () => {
        this.stopLoading();
      },
    });
  }

  stopLoading() {
    this.isLoading = false;
  }
}
