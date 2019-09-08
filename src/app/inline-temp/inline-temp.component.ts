import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-inline-temp]',
  template: `<div class="cover">
              <p>inline-temp works inline and as a attibuye :)</p>
              <p>Bu değişkenden geliyor : {{varToTmp}}</p>
              <p>Bu selam da fonksiyondan geliyor : {{selamla()}}</p>
              </div>`,
  styles: [`
    div {
      color:red;
      background:black;
    }
  `]
})
export class InlineTempComponent implements OnInit {

  public varToTmp = 'Mehmet Bozkurt';
  constructor() { }

  ngOnInit() {
  }

  selamla() {
    return "Selamlar " + this.varToTmp;
  }

}
