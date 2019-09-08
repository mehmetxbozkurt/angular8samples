import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  /*styleUrls: ['./structural-directives.component.css'],*/
  styles: [`
  .clickableTd { 
    cursor: pointer;
  }
  `],
  template:`<h2 *ngIf="displayName; else elseBlock">
  ---Structural Directives---
  </h2>
  <ng-template #elseBlock>
    <h2>
    Name is hidden
    </h2>
  </ng-template>

  <div *ngIf="displayName; then thenBlock2; else elseBlock "></div>
  <ng-template #thenBlock2>
  <h2>
  ---Structural Directives-2---
  </h2>
</ng-template>
<ng-template #elseBlock2>
<h2>
Name is hidden-2
</h2>
</ng-template>
<hr />
<br /><br />
<h2>ngSwitch</h2>
<table class="table table-striped table-bordered">
  <thead>
    <tr>
      <th>Options</th><th>Color</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="clickableTd" (click)="changeColor('red')">Red</td><td rowspan="4" [style.background]="selectedColor">{{selectedColor}}</td></tr>
    <tr><td class="clickableTd" (click)="changeColor('green')">Green</td></tr>
    <tr><td class="clickableTd" (click)="changeColor('blue')">Blue</td></tr>
    <tr><td class="clickableTd" (click)="changeColor('magenta')">Magenta</td></tr>
  </tbody>

</table>
<div [ngSwitch]="selectedColor">
<div *ngSwitchCase="'red'">Selected color is RED</div>
<div *ngSwitchCase="'green'">Selected color is GREEN</div>
<div *ngSwitchCase="'blue'">Selected color is BLUE</div>
<div *ngSwitchDefault>Selected color is PINK</div>
<p>(ngSwitch)</p>
</div>
<h2></h2>
<div *ngFor="let color of colorArr; last as l; first as f; odd as o; even as e">
  <h3 [style.color]="color">f:{{f}} - l:{{l}} - o:{{o}} - e:{{e}}   {{color}}</h3>
</div>
  `
})
export class StructuralDirectivesComponent implements OnInit {

  colorArr = ["pink","yellow","purple","magenta"];
  selectedColor = "red";
  displayName = true;
  constructor() { }

  ngOnInit() {
  }

  changeColor(color) {
    this.selectedColor = color;
  }

}
