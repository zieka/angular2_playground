import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";

@Component({
    selector: 'app',
    template: '<input placeholder="Type hello World" (keyup)="hello(input.value)" #input>{{message}}',
    directives: [],
    providers: [],
    styleUrls: [],
    pipes: []
})

export class App {
  private message = "";

  hello(value){
    this.message = value;
  }
}
