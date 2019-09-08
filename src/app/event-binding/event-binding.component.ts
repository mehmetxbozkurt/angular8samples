import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  styleUrls: ['./event-binding.component.css'],
  template: `
  <br><br>
  <h3>Event-binding</h3>
  <button (click)="onClick($event)">Greet</button> 
  <button (click)="greeting='welcome wish was'">Greet</button>
  {{greeting}}
  `
})
export class EventBindingComponent implements OnInit {
  
  public name="Codevolution";
  public greeting="";

  constructor() { }

  ngOnInit() {
  }

  onClick(e) {
    console.log("welcome "+this.name);
    console.log("welcoevent : ",e);
    this.greeting = "event binding e hoş geldiniz!";
  }

}
