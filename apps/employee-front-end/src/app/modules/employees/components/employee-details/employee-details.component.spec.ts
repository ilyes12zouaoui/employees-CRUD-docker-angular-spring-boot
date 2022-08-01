import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeService } from './../../../core/services/employees.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { EmployeeDetailsComponent } from './employee-details.component';

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;
  let router: Router;
  let route: ActivatedRoute;
  let employeeService: EmployeeService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeDetailsComponent],
      providers: [
        {
          provide: EmployeeService,
        },
      ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    employeeService = TestBed.inject(EmployeeService);
  });

  it('should create', () => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should show correct employee', () => {

    spyOn(employeeService, 'getEmployeeById').and.returnValue(
      of({
        age: 11,
        doesSport: true,
        email: 'test@email.com',
        gender: 'male',
        name: 'testName',
        id: 0,
      })
    );

    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const emailParagraph: HTMLElement = fixture.debugElement.query(
      By.css('p')
    ).nativeElement;

    expect(component).toBeTruthy();
    expect(emailParagraph.textContent).toEqual('email: test@email.com');
  });
});
