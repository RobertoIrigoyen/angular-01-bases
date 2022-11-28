import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe-component',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {

    nombre: string = 'Ironman';
    edad: number = 34;
    nombreReal: string = 'Tony Stark';

    get nombreCapitalizado() {
        return this.nombre.toUpperCase()
    }

    obtenerNombre(): string {
        return ` ${this.nombre} es ${this.nombreReal} `
    }

    cambiarNombre(): void {
        this.nombre = ' Spiderman'
    }
    cambiarEdad(): void {
        this.edad = 29
    }
}