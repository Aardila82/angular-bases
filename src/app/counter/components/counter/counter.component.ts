import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

<h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetBy()">Reset</button>
  <button (click)="decreaseBy(3)">-1</button>

  `
})

export class CounterComponent  {
  public title: string = 'Hola Alexander desde Angular';
 public counter:number = 25

increaseBy(value: number):void{

  this.counter += value;
}

decreaseBy(value: number):void{

  this.counter -= value ;
}

resetBy(value: number = 25):void{

  this.counter = value ;
}
  constructor() { }





}


