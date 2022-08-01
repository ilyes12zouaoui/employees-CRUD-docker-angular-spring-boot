import { NotificationService } from './../../../core/services/notification.service';
import { ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmployeeService } from './../../../core/services/employees.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdateFormComponent } from './employee-update-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EmployeeUpdateFormComponent', () => {
  let component: EmployeeUpdateFormComponent;
  let fixture: ComponentFixture<EmployeeUpdateFormComponent>;
  let toastrService: jasmine.SpyObj<ToastrService>;
  beforeEach(async () => {
    toastrService = jasmine.createSpyObj<ToastrService>('ToasterService', [
      'error',
      'success',
    ]);
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ EmployeeUpdateFormComponent ],
      providers: [ EmployeeService, NotificationService,
        {
          provide: ToastrService,
          useValue: toastrService,
        },
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
