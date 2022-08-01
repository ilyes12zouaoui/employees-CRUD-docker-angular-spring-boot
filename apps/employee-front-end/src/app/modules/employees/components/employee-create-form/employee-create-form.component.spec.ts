import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from './../../../core/services/employees.service';
import { NotificationService } from './../../../core/services/notification.service';

import { EmployeeCreateFormComponent } from './employee-create-form.component';

describe('EmployeeCreateFormComponent', () => {
  let component: EmployeeCreateFormComponent;
  let fixture: ComponentFixture<EmployeeCreateFormComponent>;
  let toastrService: jasmine.SpyObj<ToastrService>;
  beforeEach(async () => {
    toastrService = jasmine.createSpyObj<ToastrService>('ToasterService', [
      'error',
      'success',
    ]);
    await TestBed.configureTestingModule({
      declarations: [EmployeeCreateFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatCheckboxModule,MatRadioModule,ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule.withRoutes([])],
      providers: [
        EmployeeService,
        NotificationService,
        {
          provide: ToastrService,
          useValue: toastrService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
