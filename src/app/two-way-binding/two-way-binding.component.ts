import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  styleUrls: ['./two-way-binding.component.css'],
  template: `
      <input [(ngModel)]="name"  type="text"> 
      {{name}}
  `
})
export class TwoWayBindingComponent implements OnInit {

  public name="";

  constructor() { }

  ngOnInit() {
  }

}
