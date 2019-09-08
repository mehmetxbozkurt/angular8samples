import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-pipes',
  template: `
  <h2>{{ name }}</h2>
  <h2>{{ name | lowercase }}</h2>
  <h2>{{ name | uppercase }}</h2>
  <h3>{{ message | titlecase }}</h3>
  <h3>{{ message | slice:8 }}</h3>
  <h3>{{ message | slice:8:15 }}</h3>
  <h4>{{ person | json }}</h4>
  <br>

  <!-- <h4>{{ 5.678 | number:'DesimalDigits.minDigits-maxDigits' }}</h4> -->

  <h4>{{ 5.678 | number:'1.2-3' }}</h4>
  <h4>{{ 5.678 | number:'3.4-5' }}</h4>
  <h4>{{ 5.678 | number:'3.1-2' }}</h4>
  <br>
  <h4>{{ 0.25 | percent }}</h4>
  <h4>{{ 0.25 | currency }}</h4>
  <h4>{{ 0.25 | currency:'GBP' }}</h4>
  <h4>{{ 0.25 | currency:"TRY":"symbol"}}</h4>
  `,
  styles: []
})
export class PipesComponent implements OnInit {

  public name = "Angular 8 öğreniyorum";
  public message = "Angular 8 e hoşgeldiniz.";
  public person = {
    firstName : 'Ömer',
    lastName : 'Bozkurt'
  }
  constructor() { }

  ngOnInit() {
  }

}
