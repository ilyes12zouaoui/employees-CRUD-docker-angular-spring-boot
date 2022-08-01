import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from './employees.service';

const employeeMock = {
    age: 11,
    doesSport: true,
    email: 'test@email.com',
    gender: 'male',
    name: 'testName',
    id: 5,
  }
describe('EmployeesService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let employeeService: EmployeeService;
  beforeAll(() => {
    httpClientSpy = jasmine.createSpyObj<HttpClient>('HttpClient',['get']);
    employeeService = new EmployeeService(httpClientSpy);
    
  });
  it('should get employee by id', () => {
    httpClientSpy.get.and.returnValue(
      of(employeeMock)
    );

    employeeService.getEmployeeById(5).subscribe((employee)=>{
        expect(employee).toEqual(employeeMock)
    })  
  });
});
