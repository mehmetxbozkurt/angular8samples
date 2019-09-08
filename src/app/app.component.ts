import { Component } from '@angular/core';
import { Model , TodoItems } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-angular8';
  model = new Model();

  /* component interaction */
  public name="Ömer Bozkurt";
  public message="";

  getName() {
    return this.model.user;
  }
  getItems2Table1() {
    return this.model.items.filter(item => !item.action);
  }
  getItems2Table2() {
    return this.model.items.filter(item => item.action);
  }  

  addItem(value) {
    if(value) {
      this.model.items.push(new TodoItems( value , false));
    }
  }
}
