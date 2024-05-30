import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [];

  constructor(private http: HttpClient) {
    for (let i = 1; i <= 100; i++) {
      this.employees.push({
        id: `000000${i}`,
        username: `user${i}`,
        firstName: `First${i}`,
        lastName: `Last${i}`,
        email: `user${i}@example.com`,
        birthDate: new Date(1990, i % 12, i % 28),
        basicSalary: 1000 * i + i * 10 + i * 4,
        status: i % 2 === 0 ? 'Active' : 'Inactive',
        group: `Group${i % 5}`,
        description: `Description for user${i}`
      });
    }
  }

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }

  addEmployee(employee: Employee): Observable<void> {
    this.employees.push(employee);
    return of();
  }

  getEmployeeById(id: string): Observable<Employee> {
    const employee = this.employees.find(emp => emp.id === id);
    return of(employee as Employee);
  }
  
}
