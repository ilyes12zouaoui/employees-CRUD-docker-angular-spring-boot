import { SpinnerService } from './modules/core/services/Spinner.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'employees-front-end';
  constructor() {
    
  }
  ngOnInit(): void {
  }




}
