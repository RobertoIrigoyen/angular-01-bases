import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent {

  get personajes(): Personaje[]{
    return this.dbzServices.personajes;
  }

  constructor( private dbzServices: DbzServices){
    this.dbzServices
  }
}
