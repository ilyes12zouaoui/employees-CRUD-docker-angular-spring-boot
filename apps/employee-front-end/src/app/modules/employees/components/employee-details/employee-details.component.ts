import { EmployeeModel } from './../../../core/models/EmployeeModel';
import { EmployeeService } from '../../../core/services/employees.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee!: EmployeeModel;
  isLoading: boolean = true;
  isFound: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.getDetails();
    });
  }

  getDetails() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.employeeService.getEmployeeById(id).subscribe({
      next: (employee) => {
        this.stopLoading();
        this.employee = employee;
        this.isFound = true;
      },
      error: (err) => {
        this.stopLoading();
      },
      complete: () => {
        this.stopLoading();
      },
    });
  }
  onDelete() {
    this.employeeService
      .deleteEmployee(this.employee.id!)
      .subscribe(() => this.employeeService.emitEmployeesChangedEvent());

    this.router.navigate(['/employees']);
  }

  onUpdate() {
    this.router.navigate(['/employees', this.employee.id, 'update']);
  }
  stopLoading() {
    this.isLoading = false;
  }
}
