import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employee/list-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { EmployeeService } from './employee/employee.service';
import { DisplayEmployeeComponent } from './employee/display-employe.component';
import { CreateEmployeeCanDeactivateGuardService } from './employee/create-employee-can-deactive-guard.service';
import { EmployeeDetailsComponent } from './employee/employee-details.component';
import { EmployeeFilterPipe } from './employee/employee-filter.pipe';
import { EmployeeListResolverService } from './employee/employee-list-resolver.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailsGuardService } from './employee/employee-details-guard.service';
import { AccordionComponent } from './shared/accordion.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: ListEmployeesComponent,
    resolve: { employeeList: EmployeeListResolverService }
  },
  {
    path: 'edit/:id',
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService]
  },
  {
    path: 'employees/:id', component: EmployeeDetailsComponent,
    canActivate: [EmployeeDetailsGuardService]
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'notfound', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    PageNotFoundComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardService,
    EmployeeListResolverService, EmployeeDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
