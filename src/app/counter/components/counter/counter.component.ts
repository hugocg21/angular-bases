import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }} </h3>

  <button (click)="changeCounter(+1)" >+1</button>
  <button (click)="resetCounter()" >Reset</button>
  <button (click)="changeCounter(-1)" >-1</button>

  `
})

export class CounterComponent{
  public title: string = '02-bases';
  public counter: number = 10;


  //Se puede hacer de esta manera, creando dos métodos por separado, uno que sume 1 y otro que reste 1 al número

  // public increaseBy(): void{
  //   this.counter += 1;
  // }

  // public decreaseBy(): void {
  //   this.counter -= 1;
  // }

  //Pero esta de esta manera nos ahorramos mucho código, ya que utilizamos sólo un método, pasando el número que se le debe sumar al contador
  public changeCounter(value: number): void{
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
