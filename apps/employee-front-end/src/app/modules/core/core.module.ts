import { SharedModule } from './../shared/shared.module';
import { GlobalErrorHandler } from './global.error-handler';
import { NotificationService } from './services/notification.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { CoreRoutingModule } from './core-routing.module';
import { RetryInterceptor } from './retry.interceptor';
import { EmployeeService } from './services/employees.service';
import { SpinnerService } from './services/Spinner.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    HomePageComponent,
    AboutPageComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [
    EmployeeService,
    SpinnerService,
    NotificationService,
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true },
    {
      provide: ErrorHandler, 
      useClass: GlobalErrorHandler
    }
  ],
})
export class CoreModule {}
