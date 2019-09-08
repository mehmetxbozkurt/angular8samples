import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template:`
    <h2>{{"Hello " + name}}</h2>
    <button (click)="fireEvent()">Click for emit</button>
  `
})
export class ComponentInteractionComponent implements OnInit {

  //@Input() public parentData;
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
    //console.log("parentData : ",this.parentData);
  }

  fireEvent() {
    this.childEvent.emit('This is emit!');
  }

}
