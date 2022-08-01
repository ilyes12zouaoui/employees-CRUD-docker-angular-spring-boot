import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../core/services/employees.service';
import { testValueNotAllowed } from '../../validators/TestValueNotAllowed.validator';
import { EmployeeModel } from './../../../core/models/EmployeeModel';
import { AsyncValidatorService } from './../../../core/services/async-validator.service';
import { NotificationService } from './../../../core/services/notification.service';

@Component({
  selector: 'app-employee-create-form',
  templateUrl: './employee-create-form.component.html',
  styleUrls: ['./employee-create-form.component.css'],
})
export class EmployeeCreateFormComponent implements OnInit {
  createForm!: FormGroup;
  isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private navigationRoute: Router,
    private notificationService: NotificationService,
    private asyncValidatorService: AsyncValidatorService
  ) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: [
        '',
        [Validators.required, testValueNotAllowed, Validators.minLength(3)],
      ],
      email: ['', [Validators.required], [this.asyncValidatorService.isEmailUniqueAsyncValidator()]],
      age: ['', [Validators.min(1), Validators.required]],
      gender: ['male', [Validators.required]],
      doesSport: [false, [Validators.required]],
    });
  }

  onSubmit() {
    if (this.createForm.invalid) {
      this.notificationService.showErrorNotification('invalid inputs');
    } else if (this.createForm.pending) {
      this.notificationService.showInfoNotification(
        'still running checks please wait'
      );
    } else {
      const employee: EmployeeModel = {
        ...this.createForm.value,
      };
      this.isLoading = true;
      this.employeeService.createEmployee(employee).subscribe({
        next: () => {
          this.notificationService.showSuccessNotification(
            'Successfully created'
          );
          this.employeeService.emitEmployeesChangedEvent();
          this.navigationRoute.navigate(['/employees']);
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }
}
