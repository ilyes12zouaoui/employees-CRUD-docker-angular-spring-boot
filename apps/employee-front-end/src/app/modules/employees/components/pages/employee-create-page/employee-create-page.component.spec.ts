import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreatePageComponent } from './employee-create-page.component';

describe('EmployeeCreatePageComponent', () => {
  let component: EmployeeCreatePageComponent;
  let fixture: ComponentFixture<EmployeeCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
