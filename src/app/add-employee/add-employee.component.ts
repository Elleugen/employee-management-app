import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeService } from '../services/employee.service';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { Observable } from 'rxjs';

// import { Employee } from '../models/employee.model';
import { startWith, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxMatSelectSearchModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employeeForm: FormGroup;
  groupFilterCtrl = new FormControl();
  filteredGroups: Observable<string[]>;
  groups: string[] = ['Group1', 'Group2', 'Group3', 'Group4', 'Group5', 'Group6', 'Group7', 'Group8', 'Group9', 'Group10'];
  today: string;


  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar, private employeeService: EmployeeService) {
    let i = 1;
    this.employeeForm = this.fb.group({
      id: [i, Validators.required],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      basicSalary: ['', Validators.required],
      status: ['', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required]
    });
    i++;

    this.filteredGroups = this.groupFilterCtrl.valueChanges.pipe(
      startWith(''),
      map(group => group ? this.filterGroups(group) : this.groups.slice())
    );

    this.today = new Date().toISOString().split('T')[0];
  }

  // generateEmployeeId(): string {
  //   const existingIds = this.employeeService.getEmployees().map(emp => emp.id);
  //   let maxId = 0;
  //   for (const id of existingIds) {
  //     const numId = parseInt(id, 10);
  //     if (numId > maxId) {
  //       maxId = numId;
  //     }
  //   }
  //   const newId = (maxId + 1).toString().padStart(6, '0');
  //   return newId;
  // }

  filterGroups(name: string): string[] {
    return this.groups.filter(group =>
      group.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  onSubmit() {
    // STUCK
    // if (this.employeeForm.valid) {
    //   this.employeeService.addEmployee(this.employeeForm.value).subscribe(() => {
    //     this.router.navigate(['/employees']);
    //   });
    // }
    this.router.navigate(['/employees']);
    this.snackBar.open('Add new employee succeed!', 'Close', {
      duration: 2000,
      panelClass: ['green-snackbar']
    });
  }

  goBack() {
    this.router.navigate(['/employees']);
  }
}
