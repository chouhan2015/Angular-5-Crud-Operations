import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
//import {FirstComponent} from './first/first.component'
import { ListEmployeesComponent } from './employee/list-employee.component';
import { CreateEmployeeComponent } from "./employee/create-employee.component";
import { CreateEmployeeCanDeactivateGuardService } from "./employee/create-employee-can-deactive-guard.service";
import { EmployeeDetailsComponent } from "./employee/employee-details.component";
import { EmployeeDetailsGuardService } from "./employee/employee-details-guard.service";
import { PageNotFoundComponent } from "./page-not-found.component";
import { EmployeeListResolverService } from "./employee/employee-list-resolver.service";
const routes: Routes = [
 {
    path: 'employee',
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
  { 
    path: '', 
    redirectTo: '/employee',
    pathMatch: 'full' 
  },
  { 
    path: 'notfound',
    component: PageNotFoundComponent
  },
   
  {
    path: 'charts',
    loadChildren : "./feature/feature.module#FeatureModule"
  },
  {
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);