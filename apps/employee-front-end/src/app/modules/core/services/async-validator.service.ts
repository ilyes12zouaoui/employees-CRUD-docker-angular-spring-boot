import { EmployeeService } from './employees.service';
import { map, Observable } from 'rxjs';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
  })
  export class AsyncValidatorService {
    constructor(private employeeService: EmployeeService) {}
  
    isEmailUniqueAsyncValidator(): ValidatorFn {
      return (
        control: AbstractControl
      ): Observable<{ [key: string]: any } | null> => {
        const isUnique$ = this.employeeService.isEmployeeEmailExisting(control.value)
        return isUnique$.pipe(
          map((isUnique) => (isUnique ? { isEmailUnique: true } : null))
        );
      };
    }
  }