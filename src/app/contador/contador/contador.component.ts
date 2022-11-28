import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ title }}</h1>

    <h3> La base es: <strong>{{base}}</strong></h3>

    <button (click)="acumular(numero)"> {{numero}} </button>

    <span> {{ numero }} </span>
    <button (click)="acumular(-numero)"> -{{numero}} </button>
    
    `
})

export class ContadorComponent {
    title: string = 'Contador amigo';
  numero: number = 5

  base: number = 5

  acumular(numero: number) {
    this.base += numero
  }
}