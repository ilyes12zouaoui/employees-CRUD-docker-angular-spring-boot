import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdatePageComponent } from './employee-update-page.component';

describe('EmployeeUpdatePageComponent', () => {
  let component: EmployeeUpdatePageComponent;
  let fixture: ComponentFixture<EmployeeUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUpdatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
