import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `<div>
  <h2>Property Binding</h2>
  <input [id]="myId" type="text" value="wishwas">
  <input [id]="myId2" [disabled]="isDisabled" type="text" value="wishwas">
  <input id="{{myId2}}" bind-disabled="isDisabled" type="text" value="wishwas">
  </div>`,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public myId='mehmetId';
  public myId2='omerId';
  public isDisabled = false;
  constructor() { }

  ngOnInit() {
  }

}
