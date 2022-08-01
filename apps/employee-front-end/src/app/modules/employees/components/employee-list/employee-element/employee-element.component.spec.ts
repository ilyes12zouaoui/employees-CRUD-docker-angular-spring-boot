import { EmployeeModel } from './../../../../core/models/EmployeeModel';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from './../../../../core/services/notification.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmployeeService } from './../../../../core/services/employees.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeElementComponent } from './employee-element.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EmployeeElementComponent', () => {
  let component: EmployeeElementComponent;
  let fixture: ComponentFixture<EmployeeElementComponent>;
  let toastrService: jasmine.SpyObj<ToastrService>;
  beforeEach(async () => {
    toastrService = jasmine.createSpyObj<ToastrService>('ToasterService', [
      'error',
      'success',
    ]);
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [EmployeeElementComponent],
      providers: [ EmployeeService, NotificationService,
        {
          provide: ToastrService,
          useValue: toastrService,
        },
      ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(EmployeeElementComponent);
    component = fixture.componentInstance;
    component.employee = {
      age: 11,
      doesSport: true,
      email: 'test@email.com',
      gender: 'male',
      name: 'testName',
      id: 2,
    };
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
