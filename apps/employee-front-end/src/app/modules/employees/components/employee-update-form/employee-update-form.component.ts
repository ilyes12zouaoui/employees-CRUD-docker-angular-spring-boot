import { AsyncValidatorService } from './../../../core/services/async-validator.service';
import { NotificationService } from './../../../core/services/notification.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../core/services/employees.service';
import { testEmailNotAllowedAsync } from './../../validators/TestEmailNotAllowed.validator';
import { testValueNotAllowed } from './../../validators/TestValueNotAllowed.validator';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModel } from './../../../core/models/EmployeeModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-update-form',
  templateUrl: './employee-update-form.component.html',
  styleUrls: ['./employee-update-form.component.css'],
})
export class EmployeeUpdateFormComponent implements OnInit {
  isLoading: boolean = true;
  isFound: boolean = false;
  updateForm!: FormGroup;
  employee!: EmployeeModel;
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private navigationRoute: Router,
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private asyncValidatorService: AsyncValidatorService
  ) {}

  ngOnInit() {
    this.updateForm = this.fb.group({
      name: [
        '',
        [Validators.required, testValueNotAllowed, Validators.minLength(3)],
      ],
      email: ['', [Validators.required], [this.asyncValidatorService.isEmailUniqueAsyncValidator()]],
      age: ['', [Validators.min(1), Validators.required]],
      gender: ['male', [Validators.required]],
      doesSport: [false, [Validators.required]],
    });
    this.route.paramMap.subscribe((paramMap) => {
      this.getDetailsAndFillUpForm();
    });
  }

  getDetailsAndFillUpForm() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployeeById(id).subscribe({
      next: (employee) => {
        
        this.employee = employee;
        this.fillUpForm();
        this.isFound = true;
        this.stopLoading();
      },
      error: (err) => {
        this.stopLoading();
      },
      complete: () => {
        this.stopLoading();
      },
    });
  }

  fillUpForm() {
    this.updateForm = this.fb.group({
      name: [
        this.employee.name,
        [Validators.required, testValueNotAllowed, Validators.minLength(3)],
      ],
      email: [
        this.employee.email,
        [Validators.required],
        [this.asyncValidatorService.isEmailUniqueAsyncValidator()],
      ],
      age: [this.employee.age, [Validators.min(1), Validators.required]],
      gender: [this.employee.gender, [Validators.required]],
      doesSport: [this.employee.doesSport, [Validators.required]],
    });
  }

  onSubmit() {
    if (this.updateForm.invalid) {
      this.notificationService.showErrorNotification('invalid inputs');
    } else if (this.updateForm.pending) {
      this.notificationService.showInfoNotification(
        'still running checks please wait'
      );
    } else {
      this.employee = {
        ...this.updateForm.value,
        id: this.employee.id,
      };
      this.employeeService.updateEmployee(this.employee).subscribe(() => {
        this.notificationService.showSuccessNotification(
          'Successfully updated'
        );
        this.employeeService.emitEmployeesChangedEvent();
        this.navigationRoute.navigate(['/employees']);
      });
    }
  }

  stopLoading() {
    this.isLoading = false;
  }
}
