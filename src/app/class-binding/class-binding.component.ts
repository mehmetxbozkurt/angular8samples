import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
  <h3 class="text-success">1.This is class binding</h3>
  <h3 [class]="succuessClass">2.This is class binding</h3>
  <h3 class="text-special" [class]="succuessClass">3.This is class binding</h3>
  <h3 [class.text-danger]="danger">4.This is class binding</h3>
  <h3 [class.text-danger]="hasError">5.This is class binding</h3>
  <h3 [ngClass]="messageClasses">6.This is class binding</h3>
  `,
  styles: [`
  .text-succes {
    color: green;
  }
  .text-danger {
    color:red;
  }
  .text-special {
    font-style: italic;
  }
  `]
})
export class ClassBindingComponent implements OnInit {

  public name = 'Abuzer Kadayıf';
  public succuessClass = "text-succes";
  public danger = true;
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

}
