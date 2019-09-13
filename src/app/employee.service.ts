import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {"id":1,"name":"Ali","age":10},
      {"id":2,"name":"Veli","age":20},
      {"id":3,"name":"Hasan","age":15},
      {"id":4,"name":"Ömer","age":3}
    ];
  }
}
