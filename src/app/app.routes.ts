import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/add', component: AddEmployeeComponent },
  { path: 'employees/:id', component: EmployeeDetailComponent }
];
