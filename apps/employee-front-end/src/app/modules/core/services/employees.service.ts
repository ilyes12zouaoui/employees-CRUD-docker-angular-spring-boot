import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeModel } from '../models/EmployeeModel';
@Injectable()
export class EmployeeService {
    employeesChanged: Subject<void> = new Subject<void>;
    apiURL;
    constructor(private http: HttpClient) {
        this.apiURL= environment.API_URL_EMPLOYEES
    }
    createEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
       return this.http.post<EmployeeModel>(`${this.apiURL}/api/v1/employees`, employee)
    }

    updateEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
       return this.http.put<EmployeeModel>(`${this.apiURL}/api/v1/employees`, employee)
    }

    getEmployees(): Observable<EmployeeModel[]> {
       return this.http.get<EmployeeModel[]>(`${this.apiURL}/api/v1/employees`);
    }

    getEmployeeById(id: number): Observable<EmployeeModel> {
        return this.http.get<EmployeeModel>(`${this.apiURL}/api/v1/employees/${id}`);
    }

    isEmployeeEmailExisting(email: string) : Observable<boolean>{
        return this.http.get<boolean>(`${this.apiURL}/api/v1/employees/email/${email}`);
    }

    deleteEmployee(id: number): Observable<void> {
       return this.http.delete<void>(`${this.apiURL}/api/v1/employees/${id}`)
    }

    emitEmployeesChangedEvent(): void{
        this.employeesChanged.next();
    }


}