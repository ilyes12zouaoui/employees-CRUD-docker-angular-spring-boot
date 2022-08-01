import { NotificationService } from './../../../../core/services/notification.service';
import { EmployeeService } from '../../../../core/services/employees.service';
import { EmployeeModel } from './../../../../core/models/EmployeeModel';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-element',
  templateUrl: './employee-element.component.html',
  styleUrls: ['./employee-element.component.css'],
})
export class EmployeeElementComponent implements OnInit {
  @Input() employee!: EmployeeModel;

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  onDelete() {
    this.employeeService.deleteEmployee(this.employee.id!).subscribe(() => {
      this.notificationService.showSuccessNotification(
        'Successfully deleted'
      );
      this.employeeService.emitEmployeesChangedEvent();
      
    this.router.navigate(['/employees']);
    });
  }

  onUpdate() {
    this.router.navigate(['/employees', this.employee.id, 'update']);
  }
  onShowDetails(){
    this.router.navigate(['/employees', this.employee.id]);
  }
}
