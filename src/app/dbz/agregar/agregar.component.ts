import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  constructor(private dbzService: DbzServices) { }

  ngOnInit(): void {
  }

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }


  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return
    }

    this.dbzService.agregarPersonaje(this.nuevo)
    
    console.log(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }
}
